'use strict';

const Graph = function() {
  this.nodes = {};
}

Graph.prototype.addNode = function(node) {
  this.nodes[node] = this.nodes[node] || { edges: {} };
};

Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var edgeNode in this.nodes[node].edges) {
      // handle edges in other existing nodes
      this.removeEdge(edgeNode, node);
    }
    delete this.nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  return !!this.nodes[fromNode].edges[toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(callback) {
  for (var eachNode in this.nodes) {
    callback(eachNode);
  }
};

module.exports = { Graph };
