'use strict'

const mongoose = require('mongoose')

const databaseName = 'vatterottFoundation'
mongoose.Promise = global.Promise

module.exports = function (log) {
  log.info('Connecting to MongoDb.', {
    databaseName
  })

  const options = {
    promiseLibrary: global.Promise
  }
  mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, options)
}
