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
    const node = new Node(value);
    if (i === undefined || i === this.length) {
      let currentNode = this.root;
      if (!this.root) {
        this.root = node;
        this.length = 1;
        return true;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length += 1;
      return true;
    } else if (i >= 0 && i < this.length && this.length >= 0) {
      let currentNode = this.root;
      let nextNode = this.root.next;
      let count = 0;
      while (count < i) {
        currentNode = currentNode.next;
        nextNode = currentNode.next.next;
        count += 1;
      }
      currentNode.next = node;
      node.next = nextNode;
      this.length += 1;
      return true;
    } else {
      return false;
    }
  }

  removeNode(i) {
    let currentNode = this.root;
    let count = 1;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;
    if (i === undefined || i === this.length) {
      while (count < this.length-1) {
        currentNode = currentNode.next;
        count += 1;
      }
      currentNode.next = null;
      this.length -= 1;
      return true;
    } else if (i < this.length) {
      if (i === 0) {
        this.root = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.length -= 1;
        return true;
      }
      while (count < i) {
        beforeNodeToDelete = currentNode.next;
        nodeToDelete = beforeNodeToDelete.next;
        count += 1;
      }
      beforeNodeToDelete.next = nodeToDelete.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      this.length -= 1;
      return true;
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
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
// console.log(list.addNode(4), list);
// console.log(list.addNode(4, 2), list);
// console.log(list.removeNode(1), list);
// console.log(list.print());
