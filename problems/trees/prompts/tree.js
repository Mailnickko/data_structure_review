class Tree {

  constructor(val) {
    this.value = val;
    this.parent = null;
    this.children = [];
  }

  addChild(val) {
    let newTree = new Tree(val);
    this.children.push(newTree);
    newTree.parent = this;
  }

  removeFromParent() {
    let childIndex = this.parent.children.indexOf(this);
    this.parent.children.splice(childIndex, 1);
    this.parent = null;
  }

  contains(target) {
    if (this.value === target) {
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
    return false;
  }

  traverse(callback) {
    callback(this.value);
    this.children.forEach((child) => {
      child.traverse(callback);
    });
  }
}

module.exports = { Tree };