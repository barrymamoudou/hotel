import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  public starWidth!:number ;
  @Input()

  public rating :number=2;
  @Output()
  public starRatingCliked : EventEmitter<string> =new EventEmitter<string>();



  ngOnInit(): void {

    this.starWidth=this.rating * 125 / 5
  }
  sendRating(){
    this.starRatingCliked.emit(`la note est${this.rating}`)
  }

}
