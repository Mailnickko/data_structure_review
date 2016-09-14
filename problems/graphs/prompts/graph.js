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

};

Graph.prototype.hasEdge = function(fromNode, toNode) {

};

Graph.prototype.addEdge = function(fromNode, toNode) {

};

Graph.prototype.removeEdge = function(fromNode, toNode) {

};

Graph.prototype.forEachNode = function(callback) {

};

module.exports = { Graph };
