import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import fr from '@angular/common/locales/fr';

import { StarRatingComponent } from './shared/components/star-rating/star-rating/star-rating.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
registerLocaleData(localeFr,fr)
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
   ReplaceComma,
    StarRatingComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
