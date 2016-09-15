'use strict';

const solution = require('../prompts/tree.js');
const expect = require('chai').expect;

describe('Trees', () => {
  var tree;
  beforeEach(() => {
    tree = new solution.Tree();
  })
  describe('Tree', () => {
    it('should have the methods addChild(), removeFromParent(), contains(), traverse()', () => {
      expect(tree.addChild).to.be.a('function');
      expect(tree.removeFromParent).to.be.a('function');
      expect(tree.contains).to.be.a('function');
      expect(tree.traverse).to.be.a('function');
    });

    it('should return true or false depending on if tree contains a value', () => {
      tree.addChild('Hello');
      expect(tree.contains('Hello')).to.be.equal(true);
      expect(tree.contains('Bye')).to.be.equal(false);
    });

    it('should add children to a tree', () => {
      expect(tree.contains(1)).to.be.equal(false);
      tree.addChild(1);
      expect(tree.contains(1)).to.be.equal(true);
      expect(tree.contains(2)).to.be.equal(false);
    });

    it('should detect nested children', () => {
      tree.addChild(1);
      tree.addChild(2);
      tree.children[0].addChild(3);
      tree.children[0].addChild(4);
      tree.children[0].children[0].addChild(7);

      expect(tree.contains(7)).to.be.equal(true);
    });
  });
});