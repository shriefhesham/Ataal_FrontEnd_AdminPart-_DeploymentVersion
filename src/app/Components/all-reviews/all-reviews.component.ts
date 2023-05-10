import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/Services/review.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {
  Reviews:any;
  ReviewCount:any;
 constructor( private ReviewService : ReviewService){

 }
  ngOnInit(): void {
    this.ReviewService.GetAllRewviews().subscribe((data)=>{
      this.Reviews=data;
      this.ReviewCount=data.length
      console.log(this.Reviews);
    })
  }

 
}
