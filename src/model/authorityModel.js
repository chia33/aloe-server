'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//权限列表
const AuthoritySchema = new Schema({
  name: {
    type: String,
    required: true
  }

}, {
  timestamps: {}
});

module.exports = mongoose.model('Authority', AuthoritySchema);