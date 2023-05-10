import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';

@Component({
  selector: 'app-technical-section',
  templateUrl: './technical-section.component.html',
  styleUrls: ['./technical-section.component.css']
})
export class TechnicalSectionComponent implements OnInit {

  id:any;
  SectionTechnicals:any;


  constructor(private _SectionService:SectionService,
    private _ActivatedRoute : ActivatedRoute ,
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
      console.log(data["sectionTecnicalReadDtos"]);
      this.SectionTechnicals= data["sectionTecnicalReadDtos"];
    });
  }

}
