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
    var mini;
    try {
      mini = minify(code, { fromString: true });
    } catch (caught) {
      mini = { error: caught };
    }
    if (String(mini.error || '').endsWith(' is not a supported option')) {
      // uglify-js@3
      mini = minify(code);
    } else {
      console.warn('W: Using uglify-js@2 legacy mode! Please upgrade it!');
    }
    if (mini.error) { throw mini.error; }
    mini = '\uFEFF' + mini.code + '\n';
    if (!mini.includes('function')) {
      mini = 'Minified code seems to not contain any function';
      throw new Error(mini);
    }
    return mini;
  };





















  return EX;
});
