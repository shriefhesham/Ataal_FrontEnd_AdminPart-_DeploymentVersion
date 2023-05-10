import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Location  } from '@angular/common';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';
import { ReviewService } from 'src/app/Services/review.service';
import { TechnicalService } from 'src/app/Services/technical.service';


@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {
id:any;
itemDetails:any;
constructor( private _SectionService:SectionService ,
             private _ActivatedRoute : ActivatedRoute ,
             private _location: Location , 
             private _router: Router,
             private sharedService: SharedIDChildsService,
             
             ){

}
  ngOnInit(): void {
    this.id =this._ActivatedRoute.snapshot.paramMap.get("id");
    this.sharedService.id = this.id; 
      console.log(this.sharedService.id);
      this._SectionService.GetSectionDetailsByID(this.id).subscribe((data)=>{
       this.itemDetails =data; 
       console.log(data)
   });
  }

goBack() {
  this._router.navigate(['/section']);
}



Delete()
{
 this._SectionService.DeleteSection(this.id).subscribe((data)=>{
    console.log(data)
    this._router.navigate(['/section']);
});
}

}
