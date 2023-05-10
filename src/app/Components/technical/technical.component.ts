import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';
import { TechnicalService } from 'src/app/Services/technical.service';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  Technicals:any;
  TechnicalCount:any;
  constructor(private TechnicalService:TechnicalService){


 }
  ngOnInit(): void {
    this.TechnicalService.GetAllTechnical().subscribe((data)=>{
      this.Technicals=data;
      this.TechnicalCount=data.length;
      console.log(this.Technicals);
      })
  }
}
