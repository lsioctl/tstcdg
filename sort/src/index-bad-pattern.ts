class SorterBad {
  /* longest version
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;

  }*/

  // shorter version, with modifier
  constructor(public collection: number[] | string) {};

  sort(): void {
    // let's use destructuring
    // TS figurs it out well
    const  { length } = this.collection;

    // Typeguard, TS will detect we are dealing with number[]
    // even if it is pointless here (node)
    // we do not use instanceof Array as it does not work for JS
    // with Frames
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    if (Array.isArray(this.collection)) {
      for (let i=0; i < length; i++) {
        for (let j=0; j < length -i -1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }

    // Typeguard for string, as for all primitive values
    // we use typeof
    // instance of ... could be OK with JS
    // but not for TS (typeof [] Object)
    if (typeof this.collection === 'string') {  
    }

  }
}

const sorterBad = new SorterBad([10, 2, 5, -1, -5]);

sorterBad.sort();

console.log(sorterBad.collection);