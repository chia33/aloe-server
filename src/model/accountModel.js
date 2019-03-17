'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
//TODO 添加第三方登录添加对应的字段
const AccountSchema = new Schema({
  nick: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  role: {
    type: ObjectId,
    ref: 'Role'
  },
  channel: {
    type: [ObjectId],
    ref: 'Channel'
  },
  status: {
    type: Number //处理锁定或禁用状态等
  }

}, {
  timestamps: {}
});

module.exports = mongoose.model('Account', AccountSchema);