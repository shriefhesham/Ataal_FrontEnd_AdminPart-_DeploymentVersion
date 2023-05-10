import { Component, OnInit } from '@angular/core';
import { ProblemService } from 'src/app/Services/problem.service';
import { SectionService } from 'src/app/Services/section.service';


@Component({
  selector: 'app-all-problems',
  templateUrl: './all-problems.component.html',
  styleUrls: ['./all-problems.component.css']
})
export class AllProblemsComponent implements OnInit {


  Problems:any;
  ProblemsCount:any;
  
  constructor(private _SectionService:SectionService,
              private ProblemService : ProblemService){
   
  
  }
  ngOnInit(): void {
    this.ProblemService.GetAllProblems().subscribe((data)=>{
      this.Problems=data;
      console.log(this.Problems)
      this.ProblemsCount=data.length;
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
