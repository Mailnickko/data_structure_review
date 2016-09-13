'use strict';

const LinkedList = require('../prompts/linkedList.js').LinkedList;
const assert = require('chai').assert;

describe('LinkedList', () => {
  describe('LinkedList', () => {
    it('should add items to head and tail', () => {
      const myList = new LinkedList(10);
      assert.equal(myList.head.value, 10);
      myList.addToHead('New Head');
      assert.equal(myList.head.value, 'New Head', 'Head insertion not working');
      assert.equal(myList.tail.value, 10);
      myList.addToTail('New Tail');
      assert.equal(myList.tail.value, 'New Tail');
      assert.equal(myList.head.next.value, 10);
    });
  });
});