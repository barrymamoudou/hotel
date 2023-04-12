import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListHotelService } from '../list-hotel.service';
import { IHotel } from '../IHotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotels:IHotel= <IHotel>{};
  hotel: IHotel | undefined;

  constructor( private route:ActivatedRoute, private hotelService:ListHotelService) { }

  ngOnInit(): void {
      const id:number=+this.route.snapshot.paramMap.get('id')!
      this.hotelService.getHotel().subscribe((hotels:IHotel[])=>{
      this.hotel=hotels.find(hotel => hotel.hotelId===id)
      console.log('hotel',this.hotel);
    })



  }

}
