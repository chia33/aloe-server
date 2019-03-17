'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
// 超级管理员 管理员 普通用户
const RoleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  authorities: {
    type: [ObjectId],
    ref: 'Authority'
  }

}, {
  timestamps: {}
});

module.exports = mongoose.model('Role', RoleSchema);