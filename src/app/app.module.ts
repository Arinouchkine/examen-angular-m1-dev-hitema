import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { DetailsComponent } from './details/details.component';
import { ImageTeaserComponent } from './image-teaser/image-teaser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityWeatherComponent,
    DetailsComponent,
    ImageTeaserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: localeFr, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
