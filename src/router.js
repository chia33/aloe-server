'use strict';

const Router = require('koa-router');
const router = new Router();
const accountCtrl = require('./controller/accountCtrl');

const passport = require('koa-passport');


router.post('/auth/login', (ctx, next) => {
  return passport.authenticate('local', function(err, user, info, status) {
    console.log(err, user);
    if (user === false) {
      ctx.body = { success: false }
      ctx.throw(401)
    } else {
      ctx.body = { success: true }
      return ctx.login(user)
    }
  })(ctx)
});

router.post('/auth/logout', (ctx, next) => {
  ctx.logout();
  ctx.body = 'logout';
});

router.get('/a', (ctx, next) => {
  // ctx.router available
  console.log(ctx.state.user, ctx.isAuthenticated());
  // ctx.cookies.set('nick', 'zhangsan', {
  //   maxAge: 20000,
  //   signed: true,
  //   httpOnly: true,
  // });
  if(ctx.isAuthenticated()){
    ctx.body = {a:123};
  }
  else {
    ctx.body = 'no login';
  }
});

router.get('/b', (ctx, next) => {
  // ctx.router available
  console.log(ctx.cookies.get('nick'));
  ctx.body = 'hello world112213';
});

router.post('/auth/register', accountCtrl.register);

router.post('/api/account/update', accountCtrl.update);
router.get('/api/users', accountCtrl.users);


module.exports = router;