import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ReportService } from 'src/app/Services/report.service';
// import { ReportService } from '../Services/report.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ReportData:any;
  Last3ReportData:any;
  ReportCount:any;
  Logged :boolean =false;

constructor(private _ReportService : ReportService , private Auth :AuthService){

}
  ngOnInit(): void {
    this.Auth.userRole.subscribe(()=>{
      if(this.Auth.userRole.getValue()=="Admin"){
        this.Logged = true;
      }
      else
      { this.Logged = false }
   
    })

    
  this._ReportService.GetAllReports().subscribe((response)=>{
    this.ReportData = response;
    this.Last3ReportData = response.slice(-3);
    this.ReportCount = response.length
  })
  }
  logout() {
    this.Auth.sinout();
  }

}
