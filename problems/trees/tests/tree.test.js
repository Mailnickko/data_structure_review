'use strict';

const solution = require('../prompts/tree.js');
const expect = require('chai').expect;

describe('Trees', () => {
  var tree;
  beforeEach(() => {
    tree = new solution.Tree();
  })
  describe('Tree', () => {
    it('should have the methods addChild(), removeChild(), contains(), traverse()', () => {
      expect(tree.addChild).to.be.a('function');
      expect(tree.removeChild).to.be.a('function');
      expect(tree.contains).to.be.a('function');
      expect(tree.traverse).to.be.a('function');
    });

    it('should true or false depending on if tree contains a value', () => {

    });

    it('should add children to a tree', () => {

    });

    it('should detect nested children', () => {

    });
  });
});