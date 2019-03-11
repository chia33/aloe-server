'use strict';

const passport = require('koa-passport');
const AccountService = require('./service/accountService');

passport.serializeUser(function (user, done) {
  done(null, user._id)
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await AccountService.findById(id);
    done(null, user)
  } catch (err) {
    done(err)
  }
});

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (username, password, done) {
  AccountService.verify(username, password).then(user => {
    done(null, user)
    if (user !== null) {
      done(null, user)
    } else {
      done(null, false)
    }
  }).catch(err => done(err))
}));