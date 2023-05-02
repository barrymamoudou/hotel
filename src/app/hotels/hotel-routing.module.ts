import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RouterModule } from '@angular/router';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
         path:'hotels/:id',component:HotelDetailComponent,
         canActivate:[HotelDetailGuard]
     },
      { path:'hotels',component:HotelListComponent },
      { path:'hotels/:id/edit',component:HotelEditComponent },
    ]),
  ],
  exports:[
    RouterModule
  ]
})
export class HotelRoutingModule { }
