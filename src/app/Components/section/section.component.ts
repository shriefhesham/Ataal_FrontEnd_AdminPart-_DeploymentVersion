import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

SectionItems:any[]=[];
sectionCount:any;

constructor(private _SectionService:SectionService){


}
  ngOnInit(): void {
    this._SectionService.GetAllSectionWithoutDetails().subscribe((data)=>{
      this.SectionItems=data;
      this.sectionCount=data.length;
      })
  }
}
