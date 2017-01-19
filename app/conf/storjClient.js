'use strict'

const storj = require('storj-lib')
const fs = require('fs')

const storjUrl = "https://api.storj.io"

module.exports = function (log, storjAuth) {

  const privateKey = fs.readFileSync('private.key').toString()
  const keypair = storj.KeyPair(privateKey);

  log.info('Connecting to Storj', {
    url: storjUrl
  })
  const client = storj.BridgeClient(storjUrl, { keyPair: keypair });

  return client
}
