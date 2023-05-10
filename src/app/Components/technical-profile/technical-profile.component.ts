import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';
import { TechnicalService } from 'src/app/Services/technical.service';



@Component({
  selector: 'app-technical-profile',
  templateUrl: './technical-profile.component.html',
  styleUrls: ['./technical-profile.component.css']
})
export class TechnicalProfileComponent implements OnInit {
  id:any;
  TechnicalProfile:any; 
  TechnicalReview:any;


  constructor(private _SectionService:SectionService,
    private TechnicalService:TechnicalService,
    private _ActivatedRoute : ActivatedRoute  ,
    private _router: Router,
    private sharedService:SharedIDChildsService)
    {
   

    }

  ngOnInit(): void {
    const idparam =this._ActivatedRoute.snapshot.paramMap.get("id");
    if(idparam  &&  !isNaN(Number(idparam)))
    {
      this.id=+idparam;
    }
    else this.id=this.sharedService.id
    console.log(this.id);
    this.TechnicalService.GetTechnicalbyID(this.id).subscribe((data)=>{
      console.log(data);
      this.TechnicalProfile= data;
      this.TechnicalReview = data.reviews
    });
  }

    Back() {
      this._router.navigate(['/FullDetails/TechnicalSection']);
    }
    
    Delete()
    {
     this.TechnicalService.DeleteTechnical(this.id).subscribe((data)=>{
        console.log(data)
        this._router.navigate(['/FullDetails/TechnicalSection']);
    });
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
