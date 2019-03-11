'use strict';


const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {
  autoIndex: true,
  useNewUrlParser: true,
  promiseLibrary: Promise
}).then(
  () => {
    console.log('[mongose] mongodb connected');
  },
  (error) => {
    console.error('[mongose] mongodb not connected', error);
  }
);