import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 2, 5, -1, -5]);
const charactersCollection = new CharactersCollection('ghfe');
const linkedList = new LinkedList(5);
linkedList.add(3);
linkedList.add(6);

numbersCollection.sort();

console.log(numbersCollection);






