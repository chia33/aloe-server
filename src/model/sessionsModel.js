'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  _id: String,
  data: Object,
  updatedAt: {
    type: Date,
    default: Date.now(),
    expires: 86400 // 1 day
  }
});

module.exports = mongoose.model('session', SessionSchema);