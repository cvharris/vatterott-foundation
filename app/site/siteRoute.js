"use strict"

module.exports = function(server) {
  // TODO: add env flag for local dev vs production to point to right dir
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
