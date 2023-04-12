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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';

registerLocaleData(localeFr,fr)
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HomeComponent,

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

     { path:'home',component:HomeComponent },
     { path:'', redirectTo:'home',pathMatch:'full' },
     { path:'hotels/:id',component:HotelDetailComponent },
     { path:'hotels',component:HotelListComponent },
     { path:'**', redirectTo: 'home',pathMatch:'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
