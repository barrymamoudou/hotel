import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import { RouterModule } from '@angular/router';
import fr from '@angular/common/locales/fr';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './hotels/shared/guards/hotel-detail.guard';
import { HotelModule } from './hotels/hotel.module';
import { ModuleRoutingModule } from './module-routing.module';

registerLocaleData(localeFr,fr)
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,


  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HotelModule,
    ModuleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
