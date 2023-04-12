import { Component, OnInit } from '@angular/core';
import { IHotel } from './IHotel';
import { ListHotelService } from './list-hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  public title="Liste des Hotels"
  public showBadge: boolean = false;
  public hotels:IHotel[]=[]
  public _hotelfiltre=''
  public filtered:IHotel[]=[]
  public receivedRating!:string
  private errMess !:string

  constructor(private hotelliste:ListHotelService) { }

  ngOnInit(): void {
     this.hotelliste.getHotel().subscribe({
      next:hotels=>{
        this.hotels=hotels
        this.filtered=this.hotels;
      },
      error:err=>this.errMess=err
     })




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
  public receiveRatingClicked(message :string){
    this.receivedRating=message
  }
}
