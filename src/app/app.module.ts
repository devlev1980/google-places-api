import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AngularGooglePlaceModule} from 'angular-google-place';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GoogleApiService} from './services/google-api.service';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularGooglePlaceModule,
    FlexLayoutModule

  ],
  providers: [GoogleApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
