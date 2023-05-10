import { Component, ElementRef, ViewChild } from '@angular/core';

import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import darkUnica from 'highcharts/themes/dark-unica';
import { ProblemService } from 'src/app/Services/problem.service';
import { ReportService } from 'src/app/Services/report.service';
import { ReviewService } from 'src/app/Services/review.service';
import { SectionService } from 'src/app/Services/section.service';
import { TechnicalService } from 'src/app/Services/technical.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})

export class AdminLayoutComponent {
  SectionCount:any;
  SectionData:any;
  TechnicalCount:any;
  ReviewCount:any;
  ProblemCount:any;
  ReportCount:any;
  ReviewData:any;
  ReportData:any;
  ProblemData:any;
  ProblemFullData:any;
  TechnicalData:any;
  lineChart:any;
  randomTechnicals:any;
  Last3ReportData:any;

  constructor(private _sectionservice:SectionService ,
              private _TechnicalService:TechnicalService,
              private _ReviewsService :ReviewService ,
              private _ReportService :ReportService ,
              private _ProblemService:ProblemService) {}

  ngOnInit() {


    this._sectionservice.GetAllSectionWithoutDetails().subscribe((response)=>{
      this.SectionCount = response.length
      this.SectionData = response;
    })


    this._TechnicalService.GetAllTechnical().subscribe((response)=>{
      this.TechnicalData = response.slice(-8); // take only the last 8 items
      this.TechnicalCount = response.length;
        const numRandomTechnicals = 10;
      this.randomTechnicals = [];
      console.log(this.ReviewData)
  for (let i = 0; i < numRandomTechnicals; i++) {
    const randomIndex = Math.floor(Math.random() * this.TechnicalData.length);
    const randomTechnical = this.TechnicalData[randomIndex];
    this.randomTechnicals.push(randomTechnical);
  }
    });


    this._ReviewsService.GetAllRewviews().subscribe((response)=>{
      this.ReviewData =response;
      console.log(this.ReviewData)
      this.ReviewCount = response.length
    })
    this._ProblemService.GetAllProblems().subscribe((response)=>{
      this.ProblemData = response.slice(-7);
      this.ProblemFullData = response
      console.log(this.ProblemData);
      this.ProblemCount = response.length
    })
    this._ReportService.GetAllReports().subscribe((response)=>{
      this.ReportData = response;
      this.Last3ReportData = response.slice(-3);
      this.ReportCount = response.length
    })
  }

  ngAfterViewInit() {
    if (this.TechnicalData) {
      this.initializeChart();
      darkUnica(Highcharts);
    }
  }

  initializeChart(): void {
    darkUnica(Highcharts);
    this.lineChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Technicals Rate'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Technicals admitted',
          data: [ this.randomTechnicals[0].rate,
                  this.randomTechnicals[1].rate,
                  this.randomTechnicals[2].rate,
                  this.randomTechnicals[3].rate,
                  this.randomTechnicals[4].rate,
                  this.randomTechnicals[5].rate,
                  this.randomTechnicals[6].rate,
                  this.randomTechnicals[7].rate,
                  this.randomTechnicals[8].rate,
                  this.randomTechnicals[9].rate,
        ]
        } as any
      ]
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