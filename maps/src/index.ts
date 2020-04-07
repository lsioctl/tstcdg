import { User }  from './User';
import { Company }  from './Company';
import { CustomMap } from './CustomMap';


const user = new User();
const company = new Company();


const customMAP = new CustomMap('map');

// TS implicitly checks if arguments satisfies
// Markable interface
customMAP.addMarker(user);
customMAP.addMarker(company);

console.log(user);
console.log(company);

