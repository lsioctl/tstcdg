import { Sortable } from './Sortable';

export class Sorter<T> {
  constructor(public collection: Sortable<T>) {};

  sort(): void {
    // let's use destructuring
    // TS figurs it out well
    const  { length } = this.collection;

    for (let i=0; i < length; i++) {
      for (let j=0; j < length -i -1; j++) {
        if (this.collection.compare(j, j + 1)) {
          console.log('sup');
          this.collection.swap(j, j + 1);
          console.log(this.collection);
        }
      }
    }
  }
}