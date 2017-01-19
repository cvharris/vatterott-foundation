"use strict";

const co = require('co')
const fs = require('fs')
const mime = require('mime')
const path = require('path')
const Boom = require('boom')
const Sugar = require('sugar')
const _ = require('lodash')
const storj = require('storj-lib')
const bucketId = 'b8b4280a0b0d21b73981a333'
const subMonths = require('date-fns/sub_months')
const subQuarters = require('date-fns/sub_quarters')
const endOfQuarter = require('date-fns/end_of_quarter')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')
const format = require('date-fns/format')

const secret = process.env.SECRET_KEY || require('../../config.js')
const fileParams = [
  'applicationForm',
  'projectBudget',
  'orgBudget',
  'irsLetter'
]

module.exports = function grantControllerFactory(Application, log, storjClient) {

  function loadFiles(files) {
    let data = []

    files.forEach((file) => {
      const fileStats = fs.statSync(path.join(fileDir, file))
      const isDirectory = fileStats.isDirectory()
      const ext = isDirectory ? null : path.extname(file)

      data.push({
        name: file,
        created: fileStats.birthtime,
        ext: ext,
        isDirectory: isDirectory,
        path: path.join(fileDir, file)
      })
    })

    return data
  }

  function writeFile(file) {
    const tmppath = `./${file.hapi.filename}.crypt`;
    const keyring = storj.KeyRing('./', secret);
    const storjSecret = new storj.DataCipherKeyIv();
    const encrypter = new storj.EncryptStream(storjSecret);

    return new Promise(resolve => {
      file.pipe(encrypter)
        .pipe(fs.createWriteStream(tmppath))
        .on('finish', () => {
          log.info('Finished encrypting file')
          storjClient.createToken(bucketId, 'PUSH', function(err, token) {
            if (err) {
              return log.error('Storj token generation error', err.message);
            }
            log.info('Created token for file', token);

            // Store the file
            storjClient.storeFileInBucket(bucketId, token.token, tmppath, function(err, storjFile) {
              if (err) {
                return log.error('Storj error storing file', err.message);
              }
              log.info('Stored file in bucket!');

              keyring.set(storjFile.id, storjSecret);

              // Delete tmp file
              fs.unlink(tmppath, function(err) {
                if (err) {
                  return log.error(err);
                }
                log.info('Temporary encrypted file deleted');
                resolve({
                  filename: file.hapi.filename,
                  storjId: storjFile.id,
                  headers: file.hapi.headers
                })
              });
            })
          })
        })
    })
  }

  function generateFilename(file, name) {
    return `${Sugar.String.underscore(name)}-${format(new Date(), 'YYYY-M-D-hmA')}-${Sugar.String.underscore(file.hapi.filename)}`
  }

  function* ownCurrent(request, reply) {
    // Lists grant applications for the current deadline and the requesting user
    const endDate = endOfDay(subMonths(endOfQuarter(new Date()), 1))
    const startDate = startOfDay(subMonths(subQuarters(endOfQuarter(new Date()), 1), 1))

    const application = yield Application.findOne({
      userId: request.auth.credentials.id,
      createdAt: {
        $gte: startDate,
        $lte: endDate
      }
    })

    return reply(application)

	}

  function* list(request, reply) {
    // Lists grant applications for the current deadline and the requesting user
    const endDate = endOfDay(subMonths(endOfQuarter(new Date()), 1))
    const startDate = startOfDay(subMonths(subQuarters(endOfQuarter(new Date()), 1), 1))

    const application = yield Application.find()

    return reply(application)
  }

	function* upload(request, reply) {
    let uploadedFiles = Object.keys(request.payload)

    if (uploadedFiles.length === 0) {
      reply(Boom.badRequest('Nothing to upload!'))
    } else {
      // try to find an already existing application
      let appl
      if (request.payload.id) {
        appl = yield Application.findById(request.payload.id).exec()
        console.log('Found an application!', appl);
      } else {
        appl = new Application(request.payload)
        appl.userId = request.auth.credentials.id
        console.log('created a new application!')
      }

      for (var i = 0; i < fileParams.length; i++) {
        if (request.payload[fileParams[i]]) {
          const file = request.payload[fileParams[i]]
          file.hapi.filename = generateFilename(file, fileParams[i])
          const storjFile = yield writeFile(file)
          console.log('storjFile', storjFile);
          appl[fileParams[i]] = {
            fileName: file.hapi.filename,
            storjId: storjFile.storjId,
            uploaded: true
          }
        }
      }
      console.log('APPLICATION', appl);
      yield appl.save()

      return reply(appl)
    }
	}

  function* download(request, reply) {
    const filePath = `${fileDir}/${request.params.filename}`
    const mimetype = mime.lookup(filePath)

    fs.readFile(filePath, (err, data) => {
      return reply(null, data).header('Content-disposition', `attachment; filename=${request.params.filename}`).header('Content-type', mimetype)
    })
  }

  function* deleteApplication(request, reply) {
    return reply(Application.findByIdAndRemove(request.params.application_name))
  }

  function* deleteFile(request, reply) {
    reply(`file deleted!`)
  }

  return {
		list: co.wrap(list),
    ownCurrent: co.wrap(ownCurrent),
    download: co.wrap(download),
    deleteApplication: co.wrap(deleteApplication),
    deleteFile: co.wrap(deleteFile),
    upload: co.wrap(upload)
  }
}
