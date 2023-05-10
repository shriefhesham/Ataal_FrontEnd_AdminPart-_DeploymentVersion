import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';
import { TechnicalService } from 'src/app/Services/technical.service';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit{
id:any;
ReviewDetials:any;
TechnicalID:any;
TechnicalData:any;
CustomerID:any;
CustomerData:any;
constructor(private _SectionService:SectionService ,
            private _ActivatedRoute : ActivatedRoute ,
            private _router: Router,
            private ReviewService:ReviewService,
            private TechnicalService:TechnicalService,
            private CustomerService:CustomerService,
 )
  {
   
  }


  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    this.ReviewService.GetReviewByID(this.id).subscribe((data)=>{
      this.ReviewDetials=data;
      this.TechnicalID=data.technicalId;
      this.CustomerID=data.customerId;
      console.log(this.ReviewDetials);
      console.log(this.TechnicalID);
      console.log(this.CustomerID);
      this.TechnicalService.GetTechnicalbyID(this.TechnicalID).subscribe((data)=>{
        this.TechnicalData=data;
        console.log(this.TechnicalData);
      })
      this.CustomerService.GetCustomerByID(this.CustomerID).subscribe((data)=>{
        this.CustomerData=data;
        console.log(this.CustomerData);
      })
    })
  }

  goBack()
  {
    this._router.navigate(['/Reviews']);
  }

  Delete()
  {
    this.ReviewService.DeleteReview(this.id).subscribe((data)=>{
      console.log(data)
      this._router.navigate(['Reviews']);
  })
  }

  getDate(dateString: string): string {
    const NotificationDate = new Date(dateString);
    const diffMs = new Date().getTime() - NotificationDate.getTime();
    const diffMins = Math.round(diffMs / 60000); // convert to minutes
    if (diffMins < 60) {
      return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    } else if (diffMins < 1440) {
      const diffHours = Math.floor(diffMins / 60);
      return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    } else {
      const diffDays = Math.floor(diffMins / 1440);
      return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    }
  }
}
