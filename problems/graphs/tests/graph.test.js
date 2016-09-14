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
      const graph = new solution.Graph();
      graph.addNode(1);
      assert.equal(graph.contains(1), true);
      graph.removeNode(1);
      assert.equal(graph.contains(1), false);
      // edges handled in removeEdges
    });

    it('should create edges between two nodes', () => {
      const graph = new solution.Graph();
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addEdge(1,3);
      assert.equal(graph.hasEdge(1,3), true);
      assert.equal(graph.hasEdge(1,2), false);
    });

    it('should remove edges between two nodes', () => {
      const graph = new solution.Graph();
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addEdge(1,3);
      graph.addEdge(2,3);
      assert.equal(graph.hasEdge(1,3), true);
      assert.equal(graph.hasEdge(2,3), true);
      graph.removeEdge(1,3);
      graph.removeEdge(2,3);
      assert.equal(graph.hasEdge(1,3), false);
      assert.equal(graph.hasEdge(2,3), false);
    });

    it('should execute a callback on each node in graph', () => {
      const graph = new solution.Graph();
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      assert.equal(graph.hasEdge(1,2), false);
      assert.equal(graph.hasEdge(1,3), false);
      graph.forEachNode( (node) => {
        graph.addEdge(1, node);
      });
      assert.equal(graph.hasEdge(1,2), true);
      assert.equal(graph.hasEdge(1,3), true);
    });
  });
})
