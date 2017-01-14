"use strict"

module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/{folder*}',
    config: {
      auth: false,
    },
    handler: {
      directory: {
        path: 'build',
        index: true
      }
    }
  })

}
