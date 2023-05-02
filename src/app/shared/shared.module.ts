import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReplaceComma } from './pipes/replace-comma.pipe';
import { StarRatingComponent } from './components/star-rating/star-rating/star-rating.component';



@NgModule({
  declarations: [
    ReplaceComma,
    StarRatingComponent,


  ],
  imports: [
    CommonModule,

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReplaceComma,
    StarRatingComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
