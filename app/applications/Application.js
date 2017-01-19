'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = function () {

  const schema = new Schema({
    userId: Schema.Types.ObjectId,
    company: String,
    contactName: String,
    contactPhone: String,
    applicationForm: {
      fileName: String,
      storjId: String,
      uploaded: Boolean
    },
    projectBudget: {
      fileName: String,
      storjId: String,
      uploaded: Boolean
    },
    orgBudget: {
      fileName: String,
      storjId: String,
      uploaded: Boolean
    },
    irsLetter: {
      fileName: String,
      storjId: String,
      uploaded: Boolean
    }
  }, {
    collection: 'Applications',
    timestamps: true
  })

  function transform(doc, ret) {
    delete ret._id
    delete ret.__v
    return ret
  }

  schema.set('toJSON', { virtuals: true, transform: transform })
  schema.set('toObject', { virtuals: true, transform: transform })

  mongoose.model('Application', schema)

  return mongoose.model('Application')
}
