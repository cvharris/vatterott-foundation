"use strict";

const co = require('co')
const fs = require('fs')
const path = require('path')
const root = path.dirname(require.main.filename)
const Boom = require('boom')
const Sugar = require('sugar')
const _ = require('lodash')
const subMonths = require('date-fns/sub_months')
const subQuarters = require('date-fns/sub_quarters')
const endOfQuarter = require('date-fns/end_of_quarter')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')
const format = require('date-fns/format')
const fileDir = `${root}/grantApplications`
const fileParams = [
  'applicationForm',
  'projectBudget',
  'orgBudget',
  'irsLetter'
]

module.exports = function grantControllerFactory(Application, log) {

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
    let newStream = fs.createWriteStream(`${fileDir}/${file.hapi.filename}`)

    file.on('error', (err) => {
      log.error(err)
    })

    file.pipe(newStream)

    return new Promise(resolve => {
      file.on('end', function(err) {
        log.info('ended!')
        resolve({
          filename: file.hapi.filename,
          headers: file.hapi.headers
        })
      })
    })
  }

  function generateFilename(file, name) {
    return `${Sugar.String.titleize(name)} - ${file.hapi.filename} - ${format(new Date(), 'YYYY-M-D h mA')}`
  }

  return {
		list: co.wrap(list),
    download: co.wrap(download),
    deleteApplication: co.wrap(deleteApplication),
    upload: co.wrap(upload)
  }

  function* list(request, reply) {
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

    // fs.readdir(fileDir, (err, files) => {
    //   if (err) {
    //     throw err
    //   }
    //
    //   let data = loadFiles(files)
    //   data = _.sortBy(data, f => f.created)
    //
    //   reply(data).header("Authorization", request.auth.token)
    // })
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
      }

      for (var i = 0; i < fileParams.length; i++) {
        if (request.payload[fileParams[i]]) {
          const file = request.payload[fileParams[i]]
          file.hapi.filename = generateFilename(file, fileParams[i])
          appl[fileParams[i]] = {
            fileName: file.hapi.filename,
            uploaded: true
          }
          yield writeFile(file)
        }
      }
      yield appl.save()

      return reply(appl)
    }
	}

  function* download(request, reply) {
    reply('downloading file')
  }

  function* deleteApplication(request, reply) {
    reply(`application "${request.params.application_name}" deleted!`)
  }
}
