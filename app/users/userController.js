'use strict'

const co = require('co')
const bcrypt = require('bcrypt')
const Boom = require('boom')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY || require('../../config.js')

module.exports = function(log, User) {

  function* hashPassword(password) {
    // Generate a salt at level 10 strength
    return yield bcrypt.hash(password, 10)
  }

  function* createToken(user) {
    let scopes
    if (user.admin) {
      scopes = 'admin'
    }
    // Sign the JWT
    return jwt.sign({
      id: user._id,
      email: user.email,
      scope: scopes
    }, secret, {
      algorithm: 'HS256',
      expiresIn: "7d"
    })
  }

  return {
    getCurrentUser: co.wrap(getCurrentUser),
    login: co.wrap(login),
    logout: co.wrap(logout),
    register: co.wrap(register)
  }

  function* getCurrentUser(request, reply) {
    log.info('getting current user', {
      token: request.auth.token,
      creds: request.auth.credentials
    })
    const decoded = request.auth.credentials
    const user = yield User.findOne({ _id: decoded.id }).exec()

    return reply(user)
  }

  function* login(request, reply) {
    log.info('ctrl logging user in', {
      user: request.pre.user.email
    })
    // If the user's password is correct, we can issue a token.
    // If it was incorrect, the error will bubble up from the pre method
    const token = yield createToken(request.pre.user)
    const user = yield request.pre.user.update({loggedIn: true}).exec()

    if (user.nModified === 0) {
      log.info('Could not update user:', {
        email: request.pre.user.email
      })
      throw Boom.badRequest('Unable to log in user')
    }
    log.info('user logged in:', {
      token: token
    })
    // If the user is saved successfully, issue a JWT
    return reply(request.pre.user).header("Authorization", token).code(201)
  }

  function* logout(request, reply) {
    log.info('Logging out user', {
      email: request.auth.credentials.email
    })
    const decoded = request.auth.credentials
    const user = yield User.findOne({_id: decoded.id}).exec()
    const updated = yield user.update({loggedIn: false}).exec()

    if (updated.nModified === 0) {
      throw Boom.badRequest('Failed to log user out')
    }
    return reply('Logged out!').header("Authorization", '')
  }

  function* register(request, reply) {
    let user = new User()
    user.email = request.pre.creds.email
    user.loggedIn = true
    user.admin = false
    let hash = yield hashPassword(request.pre.creds.password)

    if (!hash) {
      throw Boom.badRequest('password failed to hash!')
    }
    user.password = hash
    yield user.save()

    const token = yield createToken(user)
    // If the user is saved successfully, issue a JWT
    return reply(user).header("Authorization", token).code(201)
  }
}
