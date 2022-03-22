/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-else-return */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint max-classes-per-file: ["error", 3] */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  addNode(value, i) {
    if (i === undefined) {
      const node = new Node(value);
      let currentNode = this.root;
      if (!this.root) {
        this.root = node;
        this.length += 1;
        return true;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length += 1;
      return true;
    } else if (i <= this.length) {
      let currentNode = this.root;
      let length = this.length;
      let count = 1;
      if (length === 0 || i < 1 || i > length) {
        return false;
      }
      while (count < i) {
        currentNode = currentNode.next;
        count += 1;
      }
      currentNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  removeNode(i) {
    let currentNode = this.root;
    let length = this.length;
    let count = 0;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;
    if (i === undefined) {
      while (count < this.length) {
        beforeNodeToDelete = currentNode.next;
        nodeToDelete = currentNode.next.next;
        count += 1;
      }
      beforeNodeToDelete.next = nodeToDelete.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      this.length -= 1;
      return true;
    } else if (i <= this.length) {
      if (i === 1) {
        this.root = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length -= 1;
        return deletedNode;
      } else if (i === this.length) {
        while (count < i) {
          beforeNodeToDelete = currentNode.next;
          nodeToDelete = currentNode.next.next;
          count += 1;
        }
        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length -= 1;
        return deletedNode;
      }
      while (count < i) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count += 1;
      }
      beforeNodeToDelete.next = nodeToDelete.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      this.length -= 1;
      return deletedNode;
    } else {
      return false;
    }
  }

  print() {
    const nodes = [];
    let currentNode = this.root;
    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(nodes.join(','));
  }
}

const list = new List();
// const node = new Node(5);
// console.log(list);
list.addNode(6);
list.addNode(4);
list.addNode(5);
// console.log(list.removeNode(1), list);
