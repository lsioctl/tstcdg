import { Sortable } from './Sortable';

export class NumbersCollection implements Sortable<number> {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (leftIndex < this.data.length) {
      return this.data[leftIndex] > this.data[rightIndex];
    }
    
    return false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}