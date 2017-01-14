'use strict';

const co = require('co')
const Joi = require('joi')
const Boom = require('boom')
const bcrypt = require('bcrypt')

module.exports = function(log, server, userController, User) {
  const ctrl = userController
  const root = 'user'

  function* verifyUniqueUser(request, reply) {
    const auth = decodeBasicAuth(request)
    const user = yield User.findOne({email: auth.email}).exec()

    if (user) {
      if (user.email === auth.email) {
        reply(Boom.badRequest('User with that e-mail already exists!'));
        return;
      }
    }
    return reply(auth);
  }

  function decodeBasicAuth(request) {
    const basicString = request.headers.authorization.split(' ')
    const decoded = new Buffer(basicString[1], 'base64').toString().split(':')

    return {
      email: decoded[0],
      password: decoded[1]
    }
  }

  function* logInUser(request, reply) {
    const auth = decodeBasicAuth(request)
    const password = auth.password;

    const user = yield User.findOne({email: auth.email}).exec()

    if (!user) {
      return reply(Boom.badRequest('No user with that e-mail'))
    }
    const isValid = yield bcrypt.compare(password, user.password)

    if (isValid) {
      return reply(user)
    }

    log.info('Incorrect password for user:', {
      email: auth.email
    })
    return reply(Boom.badRequest('Incorrect password and e-mail!'))
  }

  server.route({
    method: 'GET',
    path: `/${root}`,
    config: {
      handler: ctrl.getCurrentUser
    }
  })

  server.route({
    method: 'POST',
    path: `/${root}/login`,
    config: {
      auth: false,
      pre: [{
        method: co.wrap(logInUser),
        assign: 'user'
      }],
      handler: ctrl.login,
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).options({ allowUnknown: true })
      }
    }
  })

  server.route({
    method: 'POST',
    path: `/${root}/logout`,
    config: {
      handler: ctrl.logout
    }
  })

  server.route({
    method: 'POST',
    path: `/${root}/new`,
    config: {
      auth: false,
      pre: [{
        method: co.wrap(verifyUniqueUser),
        assign: 'creds'
      }],
      handler: ctrl.register,
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).options({ allowUnknown: true })
      }
    }
  })
}
