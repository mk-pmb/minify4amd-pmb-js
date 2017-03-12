
<!--#echo json="package.json" key="name" underline="=" -->
minify4amd-pmb
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Read a JavaScript file, remove the UMD export wrapper I use, then minify what
remains.
<!--/#echo -->


Usage
-----

```bash
$ minify4amd-pmb foo.js bar.js
# no output = success, minified versions are in {foo,bar}.amd.min.js
```


<!--#toc stop="scan" -->



Known issues
------------

* needs more/better tests and docs




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
