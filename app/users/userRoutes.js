'use strict';

const co = require('co')
const Joi = require('joi')
const Boom = require('boom')
const bcrypt = require('bcrypt')

module.exports = function(log, server, userController, User) {
  const ctrl = userController
  const root = 'api/user'

  function* verifyUniqueUser(request, reply) {
    const user = yield User.findOne({email: request.payload.email}).exec()

    if (user) {
      if (user.email === request.payload.email) {
        reply(Boom.badRequest('User with that e-mail already exists!'));
        return;
      }
    }
    return reply({
      email: request.payload.email,
      password: request.payload.password
    });
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
    log.info('logging user in', {
      email: request.payload.email,
      payload: request.payload
    })
    const query = User.findOne({ email: request.payload.email })
    const user = yield query.exec()

    if (!user) {
      return reply(Boom.badRequest('No user with that e-mail'))
    }
    const isValid = yield bcrypt.compare(request.payload.password, user.password)

    if (isValid) {
      return reply(user)
    }

    log.info('Incorrect password for user:', {
      email: request.payload.email
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
        payload: Joi.object({
          email: Joi.string().required(),
          password: Joi.string().required()
        })
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
