/**
 * Node class for LinkedList
 */
class Node {

  /**
   * LinkedList constructor
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * @typedef {Object} Node
 * @property {any} data - The data stored in the node
 * @property {Node} next - The next node in the list
 */

/**
 * LinkedList class
 */

class LinkedList {

  /**
   * LinkedList constructor
   */
  constructor() {
    this.head = null;
  }

  /**
   * Checks if the new node can be the head of the list
   * @param {Node} newNode - The new node to be checked
   */
  checkIfNew(newNode) {
    if (!this.head) {
      this.head = newNode;
    }
  }

  /**
   * Adds a new node at the beginning of the list
   * @param {any} num - The data to be stored in the new node
   * @example
   * let list = new LinkedList();
   * list.addFirst(1); // Adds 1 to the beginning of the list
   */
  addFirst(num) {
    const newNode = new Node(num);

    this.checkIfNew(newNode);

    if (this.head !== newNode) {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Adds a new node at the end of the list
   * @param {any} num - The data to be stored in the new node
   * @example
   * let list = new LinkedList();
   * list.addLast(2); // Adds 2 to the end of the list
   */

  addLast(num) {
    const newNode = new Node(num);

    this.checkIfNew(newNode);

    if (this.head !== newNode) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  /**
   * Prints the data of all nodes in the list
   */
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  /**
   * Returns the length of the list
   * @returns {number} The length of the list
   */
  getLength() {
    let current = this.head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    return length;
  }

  /**
   * Adds a new node at a specific index in the list
   * @param {number} index - The index at which the new node should be added
   * @param {any} num - The data to be stored in the new node
   */
  add(index, num) {
    if (index < 0 || index > this.getLength()) console.log("Please enter a valid index.");

    else {
      if (index === 0) {
        this.addFirst(num);
      } else {
        const newNode = new Node(num);

        let current = this.head;
        let previous = null;

        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;
      }
    }
  }
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);

list.addFirst(-1);
list.addFirst(-2);

list.add(8, 10);
list.add(1, 15);

list.printList();
