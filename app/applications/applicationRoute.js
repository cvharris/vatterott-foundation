"use strict"

module.exports = function (server, applicationController) {
  const ctrl = applicationController
  const root = 'application'

  server.route({
    method: 'GET',
    path: `/${root}`,
    config: {
      handler: ctrl.list
    }
  })
  server.route({
    method: 'GET',
    path: `/${root}/{application_name}`,
    config: {
      handler: ctrl.download
    }
  })
  server.route({
    method: 'DELETE',
    path: `/${root}/{application_name}`,
    config: {
      handler: ctrl.deleteApplication
    }
  })
  server.route({
    method: 'POST',
    path: `/${root}`,
    config: {
      handler: ctrl.upload,
      payload: {
        output: 'stream',
        parse: true,
        maxBytes: 1048576 * 10
      }
    }
  })
}
