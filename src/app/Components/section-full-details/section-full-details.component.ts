import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Location  } from '@angular/common';
import { SharedIDChildsService } from 'src/app/Services/shared-idchilds.service';

@Component({
  selector: 'app-section-full-details',
  templateUrl: './section-full-details.component.html',
  styleUrls: ['./section-full-details.component.css']
})
export class SectionFullDetailsComponent implements OnInit{
  id: any;
  itemFullDetails: any;

  constructor(
    private _SectionService: SectionService,
    private _ActivatedRoute: ActivatedRoute,
    private _location: Location,
    private _router: Router,
    private sharedService: SharedIDChildsService
  ) {}

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    // this.sharedService.id = this.id; 
    // console.log(sharedService.id);
    this._SectionService.GetSectionDetailsByIDWithDetails(this.id).subscribe((data)=>{
      this.itemFullDetails = data; 
      console.log(data);
      this._router.navigate(['/FullDetails/KeyWordSection']);
    });
  }
}