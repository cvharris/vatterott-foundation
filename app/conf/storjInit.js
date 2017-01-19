'use strict'

const storj = require('storj-lib')

const storjUrl = "https://api.storj.io"

module.exports = function (log) {

  const client = storj.BridgeClient(storjUrl, {
    basicAuth: {
      email: process.env.STORJ_EMAIL,
      password: process.env.STORJ_PASSWORD
    }
  })

  return client
}
