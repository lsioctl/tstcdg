import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 2, 5, -1, -5]);
const charactersCollection = new CharactersCollection('ghfe');

const sorterNumber = new Sorter(numbersCollection);

sorterNumber.sort();

const sorterChar = new Sorter(charactersCollection);

sorterChar.sort();