import {Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';
import {Address} from 'angular-google-place';
import {GoogleApiService} from '../services/google-api.service';
import {Supermarket} from '../models/supermarket';


@Component({
  selector: 'app-search', templateUrl: './search.component.html', styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('search') searchElementRef: ElementRef;
  address: string;
  lat: any;
  lng: any;
  superMarkets: Supermarket[];
  originalPlace;
  distancePlace;
  results;
  distance = [];
  km = [];
  market1 = [];
  resultFromGetDistance = [];

  constructor(private googleAPI: GoogleApiService) {
  }

  getAddress(place: Address) {
    console.log('Address', place);
    this.originalPlace = place.place_id;


  }

  // }
  getFormattedAddress(event: any) {
    this.lat = event.lat;
    this.lng = event.lng;
    console.log('Address', event);


  }


  sendData(originalPlace) {
    this.googleAPI.getNearPlaces(this.lat, this.lng).subscribe(result => {
      this.superMarkets = result.results;
      console.log(this.superMarkets);
      // console.log('Original Place', originalPlace);
      this.superMarkets.forEach((market, i) => {
        this.distancePlace = market.place_id;

        // console.log(this.distancePlace);
        this.googleAPI.getDistance(this.originalPlace, this.distancePlace).subscribe(res => {
          this.market1[this.distancePlace] = res;
          console.log(res);
          //   // this.resultFromGetDistance.push(res);
          //
        });

      });
      // console.log(this.resultFromGetDistance);

      // this.distance.map(i => {
      //   console.log(i)
      //   // this.km.push(i.rows[0].elements[0].distance.text);
      // });
      // console.log(this.km);


    });


  }


  ngOnInit() {

  }


}
