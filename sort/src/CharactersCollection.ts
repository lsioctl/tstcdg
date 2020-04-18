import { Sortable } from './Sortable';

export class CharactersCollection implements Sortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (leftIndex < this.data.length) {
      return (
        this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
      );
    }
    
    return false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join('');
  }
}