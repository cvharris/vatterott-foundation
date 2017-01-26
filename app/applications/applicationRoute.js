"use strict"

const co = require('co')
const Boom = require('boom')

module.exports = function (server, applicationController, User) {
  const ctrl = applicationController
  const root = 'api/application'

  function* verifyAdminUser(request, reply) {
    const user = yield User.findOne({email: request.auth.credentials.email}).exec()

    if (user) {
      if (!user.admin) {
        reply(Boom.unauthorized('User is not an admin!'));
        return;
      }
    }
    return reply(user);
  }

  server.route({
    method: 'GET',
    path: `/${root}/ownCurrent`,
    config: {
      handler: ctrl.ownCurrent
    }
  })
  server.route({
    method: 'GET',
    path: `/${root}`,
    config: {
      pre: [{
        method: co.wrap(verifyAdminUser)
      }],
      handler: ctrl.list
    }
  })
  server.route({
    method: 'GET',
    path: `/${root}/{filename}`,
    config: {
      handler: ctrl.download
    }
  })
  server.route({
    method: 'DELETE',
    path: `/${root}/{application_id}/file/{filename}`,
    config: {
      handler: ctrl.deleteFile
    }
  })
  server.route({
    method: 'DELETE',
    path: `/${root}/{application_id}`,
    config: {
      response: {
        emptyStatusCode: 204
      },
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
