import { LinkedListNode } from './LinkedListNode';
import { Sortable } from './Sortable';

export class LinkedList implements Sortable {
  head: LinkedListNode;
  length: number;

  constructor(value: number) {
    const firstNode = new LinkedListNode(value);
    this.head = firstNode;
    this.length = 1;
  }

  add(value: number): void {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    const newNode = new LinkedListNode(value);
    currNode.next = newNode;
    this.length ++;
  }

  print(): void {
    console.log('Linked list:');
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.value);
      console.log('|');
      console.log('v');
      currNode = currNode.next;
    }
    console.log(currNode.value);
  }

  at(index: number): number {
    if (index >= this.length) {
      throw new Error('ouf of bound');
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      // only for avoid TS to complain
      // I must do something wrong here
      if (currNode.next !== null) {
        currNode = currNode.next;
      }
    }
    return currNode.value;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // this is not performant at all, calling next would be
    // far better. I think it the same for other collection
    // interface should be refactored
    // or I should use a data field to keep track
    return this.at(leftIndex) > this.at(rightIndex);
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}