'use strict'

const mongoose = require('mongoose')

const localConnection = 'mongodb://heroku_grgdnk4p:e61c35m5jfgp1k3t9gg8i8asfb@ds111589.mlab.com:11589/heroku_grgdnk4p' //'mongodb://127.0.0.1:27017/vatterottFoundation'

mongoose.Promise = global.Promise

module.exports = function (log) {

  const connUrl = process.env.MONGODB_URI || localConnection
  const options = {
    promiseLibrary: global.Promise
  }
  mongoose.connect(`${connUrl}`, options)

  log.info('Connecting to MongoDb.', {
    connUrl
  })
}
