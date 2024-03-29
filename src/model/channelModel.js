'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true
  }

}, {
  timestamps: {}
});

module.exports = mongoose.model('Channel', ChannelSchema);