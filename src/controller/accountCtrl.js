'use strict';

const accountService = require('../service/accountService');

class AccountCtrl {

  async register(ctx) {
    console.log('register');
    ctx.body = await accountService.create();
  }

  async update(ctx) {
    console.log('register');

    const user = await accountService.findById('5c7fbac4a527bd5ca06cc275');
    console.log(user);
    ctx.body = user;
  }

  async users(ctx) {
    console.log('users', ctx.state.user);
    let users = await accountService.find();
    ctx.body = users;
  }


}

module.exports = new AccountCtrl();