'use strict';

const nodemon = require('nodemon');
const colors = require('colors/safe');

process.env.NODE_ENV = 'development';

nodemon({
  script: 'src/index.js'
});

nodemon.on('start', function () {
  console.log(colors.green('[nodemon] started '));
}).on('quit', function () {
  console.log(colors.green('[nodemon] quit'));
  process.exit();
}).on('restart', function (files) {
  console.log(colors.green('[nodemon] restarted, modify:' + files));
});