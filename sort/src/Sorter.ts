import { Sortable } from './Sortable';

export abstract class Sorter {
  abstract  swap(leftIndex: number, rightIndex: number): void;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract length: number;

  sort(): void {
    // let's use destructuring
    // TS figurs it out well
    const  { length } = this;

    for (let i=0; i < length; i++) {
      for (let j=0; j < length -i -1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}