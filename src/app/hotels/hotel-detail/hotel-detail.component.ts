import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListHotelService } from '../shared/service/list-hotel.service';
import { IHotel } from '../shared/model/IHotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel:IHotel= <IHotel>{};


  constructor( private route:ActivatedRoute, private hotelService:ListHotelService, private router:Router) { }

  ngOnInit(): void {
      const id:number=+this.route.snapshot.paramMap.get('id')!
      this.hotelService.getHotel().subscribe((hotels:IHotel[])=>{
      this.hotel=hotels.find(hotel => hotel.hotelId===id)!
      console.log('hotel',this.hotel);
    })

  }
  public BackToList():void {
    this.router.navigate(['/hotels']);
  }

}
