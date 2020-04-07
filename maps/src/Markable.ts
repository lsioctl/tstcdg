export interface Markable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}