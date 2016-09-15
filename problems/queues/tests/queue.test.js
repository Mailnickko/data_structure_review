'use strict';

const solution = require('../prompts/queue.js');
const expect = require('chai').expect;

describe('Queues', () => {
  var queue;
  beforeEach(() => {
    queue = new solution.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
  })
  describe('Queue', () => {
    it('should have the methods enqueue(), dequeue(), size()', () => {
      expect(queue.enqueue).to.be.a('function');
      expect(queue.dequeue).to.be.a('function');
      expect(queue.size).to.be.a('function');
    });

    it('should add values with enqueue', () => {
      expect(queue.size()).to.be.equal(2);
      queue.enqueue(3);
      queue.enqueue(4);
      expect(queue.size()).to.be.equal(4);
    });

    it('should remove values with dequeue and return the value', () => {
      expect(queue.size()).to.be.equal(2);
      var removed = queue.dequeue();
      expect(removed).to.be.equal(1);
      removed = queue.dequeue();
      expect(removed).to.be.equal(2);
      expect(queue.size()).to.be.equal(0);
    });
  });
});
