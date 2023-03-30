import { Component, OnInit } from '@angular/core';
import { IHotel } from './IHotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public title="Liste des Hotels"
  public showBadge: boolean = false;
  public hotels:IHotel[]=[{
    hotelId:1,
    hotelName:'bleua',
    description:'belle vue',
    price:203.4,
    imageURL:'assets/img/hotel-room.jpg',
  },
  {
    hotelId:2,
    hotelName:'Service',
    description:'service',
    price:150.4,
    imageURL:'assets/img/indoors.jpg',
  },
  {
    hotelId:3,
    hotelName:'bleua',
    description:'the service',
    price:500.4,
    imageURL:'assets/img/hotel-room.jpg',
  },
  {
    hotelId:4,
    hotelName:'bleua',
    description:'belle vue',
    price:405.4,
    imageURL:'assets/img/window.jpg'
  }
]
public _hotelfiltre='mot'
public filtered:IHotel[]=[]

  constructor() { }

  ngOnInit(): void {
    this.filtered=this.hotels;
  }
  public getDate(){
    return new Date()
  }
  public toggleBadge(){
    this.showBadge=!this.showBadge
  }

  //le getter
  public get hotelFilter():string{

    return this._hotelfiltre;
  }
  //le setter
  public set hotelFilter(filter : string){

     this._hotelfiltre=filter;

     this.filtered=this.hotelFilter ? this.hotelFilters(this.hotelFilter) : this.hotels
  }
  private hotelFilters(word:string) : IHotel[]{
    word=word.toLocaleLowerCase();
    const res=this.hotels.filter(
      (hotel:IHotel)=>hotel.hotelName.toLocaleLowerCase().indexOf(word) != -1
    )
    return res;
  }
}
