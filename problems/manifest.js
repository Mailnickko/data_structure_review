'use strict';

[
  './trial/tests/testingRun.test.js',
  './linkedList/tests/linkedList.test.js',
  './graphs/tests/graph.test.js',
  './hashTables/tests/hashTable.test.js'
].forEach(function(test) {
  require(test);
});