'use strict';

[
  './trial/tests/testingRun.test.js',
  './linkedList/tests/linkedList.test.js',
  './graphs/tests/graph.test.js',
  './hashTables/tests/hashTable.test.js',
  './stacks/tests/stack.test.js',
  './queues/tests/queue.test.js'
].forEach(function(test) {
  require(test);
});