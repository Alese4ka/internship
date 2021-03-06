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
  constructor(value) {
    this.root = new Node(value);
    this.length = 1;
  }

  addNode(value, i) {
    const node = new Node(value);
    if (i === undefined || i === this.length) {
      let currentNode = this.root;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length += 1;
      return true;
    } else if (i >= 0 && i < this.length && this.length >= 0) {
      let currentNode = this.root;
      let previousNode = null;
      let count = -1;
      while (count < i) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count += 1;
      }
      previousNode.next = node;
      node.next = currentNode;
      this.length += 1;
      return true;
    } else {
      return false;
    }
  }

  removeNode(i) {
    let previousNode = null;
    let currentNode = this.root;
    let count = 0;
    if (this.length === 1) {
      return false;
    } else if (i === undefined || i === this.length) {
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
      this.length -= 1;
      return true;
    } else if (i < this.length && i > 0) {
      while (count < i) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count += 1;
      }
      previousNode.next = currentNode.next;
      this.length -= 1;
      return true;
    } else if (i === 0) {
      this.root = currentNode.next;
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

const list = new List(1);
console.log(list);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// list.addNode(6);
// console.log(list.addNode(4), list);
// console.log(list.addNode(4, 2), list);
// console.log(list.removeNode(1), list);
// console.log(list.print());
