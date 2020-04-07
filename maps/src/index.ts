import { User }  from './User';
import { Company }  from './Company';


const user = new User();
const company = new Company();

// google is imported on index.html, so it is global
// we need to help TS to understand what it is
// npm install @types/googlemaps
// note: fold level 2 when looking a the type definition file
const mapOptions: google.maps.MapOptions = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  }
  
}
const mapDiv: Element = document.getElementById('map');
new google.maps.Map(mapDiv, mapOptions);

console.log(user);
console.log(company);

