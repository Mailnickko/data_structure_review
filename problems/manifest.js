'use strict';

[
  './trial/tests/testingRun.test.js',
  './linkedList/tests/linkedList.test.js'
].forEach(function(test) {
  require(test);
});