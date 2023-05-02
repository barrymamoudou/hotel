import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { StarRatingComponent } from '../shared/components/star-rating/star-rating/star-rating.component';
import { ReplaceComma } from '../shared/pipes/replace-comma.pipe';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RouterModule } from '@angular/router';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HotelDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path:'hotels/:id',component:HotelDetailComponent,canActivate:[HotelDetailGuard] },
      { path:'hotels',component:HotelListComponent },
    ])
  ]
})
export class HotelModule { }
