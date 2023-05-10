import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';
import { ProblemService } from 'src/app/Services/problem.service';

@Component({
  selector: 'app-problem-details',
  templateUrl: './problem-details.component.html',
  styleUrls: ['./problem-details.component.css']
})
export class ProblemDetailsComponent implements OnInit {
  ProblemID:any;
  ProblemFullDetails:any;


  constructor(private _SectionService:SectionService,
    private _ActivatedRoute : ActivatedRoute ,
    private _router: Router,
    private sharedService:SharedIDChildsService ,
    private ProblemServices:ProblemService)
    {
   

    }
  ngOnInit(): void {
    this.ProblemID =this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.ProblemID);

      this.ProblemServices.GetProblemByID(this.ProblemID).subscribe((data)=>{
      console.log(data);
      this.ProblemFullDetails=data;
    });
  }

    goBack()
    {
      this._router.navigate(['/Problems']);
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
