/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
((typeof define === 'function') && define.amd ? define : function (factory) {
  'use strict';
  var m = ((typeof module === 'object') && module), e = (m && m.exports);
  if (e) { m.exports = (factory(require, e, m) || m.exports); }
})(function (require) {
  'use strict';

  var EX = {}, minify = require('uglify-js').minify;


  EX.cleanupCode = function (code) {
    code = String(code);
    code = code.replace(/^[\S\s]+?\}\)/, 'define');
    return code;
  };


  EX.minifyCode = function (code) {
    code = EX.cleanupCode(code);
    code = '\uFEFF' + minify(code, { fromString: true }).code + '\n';
    return code;
  };





















  return EX;
});
