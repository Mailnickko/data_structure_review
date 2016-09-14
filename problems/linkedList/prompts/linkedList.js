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

  contains(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  indexOf(val) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === val) {
        return count;
      } else {
        current = current.next;
        count++;
      }
    }
    return false;
  }

  insertAfter(node, val) {
    let current = this.head;
    let newNode = new Node(val);
    while (current) {
      if (current.value === node.value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }

  removeAfter(node) {
    let current = this.head;
    while (current) {
      if (current.value === node.value) {
        current.next = current.next.next;
        return;
      } else {
        current = current.next;
      }
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
