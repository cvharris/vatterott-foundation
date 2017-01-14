'use strict'

const winston = require('winston')

const consoleLogger = new(winston.transports.Console)({
  colorize: true
})
const logLevel = process.env['ENV'] === 'prod' ? 'info' : 'debug'
const transports = [consoleLogger]

const logger = new(winston.Logger)({
  transports,
  level: logLevel
})

module.exports = logger
