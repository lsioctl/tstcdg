import { LinkedList } from "./LinkedList";

export class LinkedListNode {
  value: number;
  next: LinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  };
}

