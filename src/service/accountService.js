'use strict';

const AccountModel = require('../model/accountModel');


class UserService {

  async create(){
    const account = new AccountModel({
      nick: '张三',
      email: 'ss@abc.com',
      password: 'abc',
      status: 1
    });
    return await account.save()
  }

  async findById(id){
    const user = await AccountModel.findOne({_id: id});
    return user;
  }

  async findByEmail(email){
    const user = await AccountModel.findOne({email});
    return user;
  }

  //TODO 这里密码要加密和加盐
  async verify(email, password){
    const user = await AccountModel.findOne({email, password});
    return user;
  }


  async find(){
    const users = await AccountModel.find();
    return users;
  }
}

module.exports = new UserService();