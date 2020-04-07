import { User } from './User';
import { Markable } from './Markable';


export class CustomMap {
  // google is imported on index.html, so it is global
  // we need to help TS to understand what it is
  // npm install @types/googlemaps
  // note: fold level 2 when looking a the type definition file
  private googleMap: google.maps.Map;

  // render a new googlemap on element id
  constructor(elementId: string) {
    const mapOptions: google.maps.MapOptions = {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    }

    const mapDiv = document.getElementById(elementId);

    this.googleMap = new google.maps.Map(mapDiv, mapOptions);
  }

  addMarker(markable: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markable.location.lat,
        lng: markable.location.lng,
      }
    });

    marker.addListener(('click'), () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}