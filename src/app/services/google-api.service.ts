import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supermarket} from '../models/supermarket';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  // url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7244047%2C-122.4760196&radius=1000&type=cafe&key=AIzaSyAXG3AGgpBpAwgzn9j6eo0rNYYe-rzb4kM';

  constructor(private _http: HttpClient) {
  }

  getNearPlaces(lat: string, lng: string): Observable<any> {
    return this._http.get<any>(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=supermarket
&key=AIzaSyAXG3AGgpBpAwgzn9j6eo0rNYYe-rzb4kM`);
  }
  getDistance(originPlaceId, destinationPlaceId): Observable<any>{
    return this._http.get<any>(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:${originPlaceId}&destinations=place_id:${destinationPlaceId}&mode=walking&key=AIzaSyBSIzCogCUcl3x5XzyQdBIjh2UiLUG94UU`);
  }

}

