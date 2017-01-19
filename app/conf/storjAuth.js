'use strict'

const storj = require('storj-lib')
const fs = require('fs')

const storjUrl = "https://api.storj.io"

module.exports = function (log, storjInit) {

  const keypair = storj.KeyPair();
  storjInit.addPublicKey(keypair.getPublicKey(), function(err) {
    if (err) {
      return console.log('error', err.message);
    }

    // Save the private key for using to login later
    fs.writeFileSync('private.key', keypair.getPrivateKey());
  })

  return keypair.getPublicKey()
}
