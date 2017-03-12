/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function destFn(srcFn) { return srcFn.replace(/\.js$/, '') + '.amd.min.js'; }
require('txtrafo').easyCli({ trafoFunc: require('./').minifyCode,
  guessOutputFilename: destFn });
