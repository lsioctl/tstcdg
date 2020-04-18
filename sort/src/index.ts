import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 2, 5, -1, -5])

const sorter = new Sorter<number>(numbersCollection);

sorter.sort();

console.log(sorter.collection);