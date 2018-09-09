export interface Supermarket {
  name: string;
  icon: string;
  vicinity: string;
  rating: number;
  location: {
    lat: number, lng: number
  };
  place_id: number;

}
