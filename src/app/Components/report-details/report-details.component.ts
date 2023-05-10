import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';
import { ActivatedRoute } from '@angular/router';
import { SharedReportIDService } from 'src/app/Services/shared-report-id.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  ReportDetails:any;
  id:any;
  constructor( private ReportServices : ReportService  , private _ActivatedRoute:ActivatedRoute ,private SharedReportID:SharedReportIDService)
    {
    
     }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    this.SharedReportID.ReportID = this.id
    console.log(this.SharedReportID.ReportID)
    this.ReportServices.GetReportByID(this.id).subscribe((data)=>{
    this.ReportDetails=data;

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
