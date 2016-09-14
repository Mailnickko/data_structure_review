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

    it('should check to see a value exists in the list', () => {
      const myList = new LinkedList(0);
      myList.addToTail(4);
      myList.addToTail(6);
      myList.addToTail(8);
      myList.addToTail(10);

      assert.isFalse(myList.contains(5));
      assert.isTrue(myList.contains(6));
    });

    it('should find the index of a list or return false', () => {
      const myList = new LinkedList(1);
      myList.addToTail(2);
      myList.addToTail(3);
      myList.addToTail(4);

      assert.equal(myList.indexOf(2), 1);
      assert.equal(myList.indexOf(3), 2);
      assert.equal(myList.indexOf(0), false);
    });

    it('should insert a node after a given node', () => {
      const myList = new LinkedList(1);
      myList.addToTail(2);
      myList.addToTail(4);
      const chosenNode = myList.head.next;
      myList.insertAfter(chosenNode, 3);
      assert.equal(chosenNode.next.value, 3);
    })

    it('should remove a node after a given node', () => {
      const myList = new LinkedList(1);
      myList.addToTail(2);
      myList.addToTail(3);
      myList.addToTail(4);
      const chosenNode = myList.head.next;
      myList.removeAfter(chosenNode);
      assert.equal(chosenNode.next.value, 4);
    })
  });
});