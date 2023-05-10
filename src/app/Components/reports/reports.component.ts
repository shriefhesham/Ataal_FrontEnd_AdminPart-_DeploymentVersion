import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ReportService } from 'src/app/Services/report.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  Reports:any;
  ReportCount:any;
  
  constructor(private _SectionService:SectionService,
              private ReportServices : ReportService ,
              private toastr: ToastrService
              ) {}
  
  
  ngOnInit(): void {
    this.ReportServices.GetAllReports().subscribe((data)=>{
      this.Reports=data;
      console.log(this.Reports)
  
      this.ReportCount=data.length;
  
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
