'use strict';

require('./config/env').config();
const Koa = require('koa');
const router = require('./router');
const db = require('./db');

const app = new Koa();

// sessions
const session = require('koa-session');
const MongooseStore = require('./mongooseStore');
app.keys = [process.env.COOKIE_KEY];
app.use(session({
  httpOnly: true,
  signed: true,
  maxAge: 24 * 60 * 60 * 1000,
  store: new MongooseStore()
}, app));


require('./auth');
const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());



app.use(router.routes());

app.listen(process.env.PORT || 3000);