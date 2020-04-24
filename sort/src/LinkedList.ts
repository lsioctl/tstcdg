import { LinkedListNode } from './LinkedListNode';
import { Sortable } from './Sortable';

export class LinkedList implements Sortable {
  head: LinkedListNode;
  last: LinkedListNode;
  length: number;

  constructor(value: number) {
    const firstNode = new LinkedListNode(value);
    this.head = firstNode;
    this.last = firstNode;
    this.length = 1;
  }

  add(value: number): void {
    // not the more elegant, but I don't want to
    // parse the whole list to add at the end
    let currNode = this.last;
    const newNode = new LinkedListNode(value);
    currNode.next = newNode;
    this.last = newNode;
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

  at(index: number): LinkedListNode {
    if (index >= this.length) {
      throw new Error('Index out of bound');
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      // only for avoid TS to complain
      // the teacher's implementation goes
      // around as he does not use length but while (currNode)
      // and he has to use type annotation
      // let currNode: LinkedListNode | null;
      if (currNode.next !== null) {
        currNode = currNode.next;
      }
    }
  
    return currNode;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // this is not performant at all, calling next would be
    // far better. I think it the same for other collection
    // interface should be refactored
    // or I should use a data field to keep track
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // we just swap the values
    const leftHand = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftHand;
  }
}