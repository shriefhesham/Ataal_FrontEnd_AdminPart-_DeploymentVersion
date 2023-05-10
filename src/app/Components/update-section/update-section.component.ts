import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { SectionService } from 'src/app/Services/section.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css']
})
export class UpdateSectionComponent implements OnInit {
  sectionId: any;
  UpdatedSection: FormGroup ;
  updatedSectionData:any;
 
  constructor(private sectionService: SectionService, 
              private route: ActivatedRoute ,
              private router: Router ) 
  {
     this.UpdatedSection = new FormGroup({});
  }

  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('id');

    this.UpdatedSection = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(150)])
    });

    this.sectionService.GetSectionDetailsByID(this.sectionId).subscribe(
      (sectionData) => {
        this.UpdatedSection.setValue({
          'id': sectionData.id,
          'name': sectionData.name,
          'description': sectionData.description
        });
      }
    );
  }
  Update()
  {
     this.updatedSectionData  = this.UpdatedSection.value;
     this.sectionService.UpdateSection(this.sectionId , this.updatedSectionData).subscribe((response)=>{
            console.log(response);
            // this.toastr.success('Section updated successfully!', 'Success');
            this.router.navigate(['/section']);
     })
  }


  get NameValid(){
    return this.UpdatedSection.controls["name"].valid 
  }

  
  get NameLength(){
     return this.UpdatedSection.controls["name"].value?.length;
  }


  get DescValid(){
    return this.UpdatedSection.controls["description"].valid
  }

   
  get DescLength(){
    return this.UpdatedSection.controls["description"].value;
  }

  get IDLength(){
    return this.UpdatedSection.controls["id"].value;
  }
}
