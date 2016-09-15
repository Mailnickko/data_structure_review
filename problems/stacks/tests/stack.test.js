'use strict';

const solution = require('../prompts/stack.js');
const expect = require('chai').expect;

describe('Stacks', () => {
  var stack;
  beforeEach(() => {
    stack = new solution.Stack();
  })
  describe('Stack', () => {
    it('should have the methods push(), pop(), size()', () => {
      expect(stack.push).to.be.a('function');
      expect(stack.pop).to.be.a('function');
      expect(stack.size).to.be.a('function');
    });

    it('should return the size of a stack', () => {
      for (var i = 0; i < 15; i++) {
        stack.push(1);
      }

      expect(stack.size()).to.equal(15);
    });

    it('should add values with push', () => {
      expect(stack.size()).to.be.equal(0);
      stack.push(1);
      stack.push(2);
      expect(stack.size()).to.be.equal(2);
    });

    it('should remove values with pop', () => {
      expect(stack.size()).to.be.equal(0);
      stack.push(1);
      stack.push(2);
      expect(stack.size()).to.be.equal(2);
      var returned = stack.pop();
      expect(stack.size()).to.be.equal(1);
      expect(returned).to.be.equal(2);
    });
  });
});