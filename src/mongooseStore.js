'use strict';

const SessionModel = require('./model/sessionsModel');

class MongooseStore {
  constructor() {
    this.session = SessionModel;
  }

  async destroy(id) {
    const {session} = this;
    return session.remove({_id: id});
  }

  async get(id) {
    const {session} = this;
    const {data} = await session.findById(id) || {};
    return data;
  }

  async set(id, data, maxAge, {changed, rolling}) {
    if (changed || rolling) {
      const {session} = this;
      const record = {_id: id, data, updatedAt: Date.now()};
      await session.findByIdAndUpdate(id, record, {upsert: true, safe: true});
    }
    return data;
  }

  static create(opts) {
    return new MongooseStore(opts);
  }
}

module.exports = MongooseStore;
