'use strict';

class LinkedList {

  constructor(initVal) {
    this.head = initVal ? new Node(initVal) : null;
    this.tail = this.head;
  }

  addToHead(val) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
  }

  addToTail(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { LinkedList };
