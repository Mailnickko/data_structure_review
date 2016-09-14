'use strict';

const solution = require('../prompts/graph.js');
const assert = require('chai').assert;

describe('graph', () => {
  describe('graph constructor && methods', () => {
    it('should add a node to graph, and check with contains', () => {
      const graph = new solution.Graph();
      graph.addNode(1);
      assert.equal(graph.contains(1), true);
    });

    it('should remove a node from the graph', () => {

    });

    it('should create edges between two nodes', () => {

    });

    it('should remove edges between two nodes', () => {

    });

    it('should execute a callback on each node in graph', () => {

    });
  });
})
