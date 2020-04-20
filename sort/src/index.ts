import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { LinkedListNode } from './LinkedListNode';

const numbersCollection = new NumbersCollection([10, 2, 5, -1, -5]);
const charactersCollection = new CharactersCollection('ghfe');

const sorterNumber = new Sorter(numbersCollection);

sorterNumber.sort();

const sorterChar = new Sorter(charactersCollection);

sorterChar.sort();

const linkedList = new LinkedList(5);

linkedList.add(3);
linkedList.add(6);

linkedList.print();

const sorterLinkedList = new Sorter(linkedList);

sorterLinkedList.sort();



