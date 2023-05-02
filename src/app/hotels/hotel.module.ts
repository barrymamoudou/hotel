import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';



@NgModule({
  declarations: [
    HotelListComponent,
    HotelDetailComponent,
    HotelEditComponent
  ],
  imports: [

    SharedModule,
    HotelRoutingModule
  ]
})
export class HotelModule { }
