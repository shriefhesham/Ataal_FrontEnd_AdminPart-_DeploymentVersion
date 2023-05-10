import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';

@Component({
  selector: 'app-problem-section',
  templateUrl: './problem-section.component.html',
  styleUrls: ['./problem-section.component.css']
})
export class ProblemSectionComponent implements OnInit {
  id:any;
  SectionProblems:any;
  CustomerProblem:any;

  constructor(private _SectionService:SectionService,
    private _ActivatedRoute : ActivatedRoute ,
    private _location: Location , 
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
    
    this._SectionService.GetSectionDetailsByIDWithDetails(this.id).subscribe((data)=>{
      console.log(data["problemWithCustomerDtos"]);
      this.SectionProblems= data["problemWithCustomerDtos"];
    });

  }
}
