'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = function () {

  const schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    company: String,
    name: String,
    phone: String,
    admin: { type: Boolean, required: true },
    loggedIn: {type: Boolean, required: true, default: false }
  }, {
    collection: 'Users',
    timestamps: true
  })

  function transform(doc, ret) {
    delete ret._id
    delete ret.__v
    delete ret.password
    return ret
  }

  schema.set('toJSON', { virtuals: true, transform: transform })
  schema.set('toObject', { virtuals: true, transform: transform })

  mongoose.model('User', schema)

  return mongoose.model('User')
}
