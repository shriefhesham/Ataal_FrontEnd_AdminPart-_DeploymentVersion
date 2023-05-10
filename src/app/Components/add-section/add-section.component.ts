import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl , FormGroup , Validator, Validators } from "@angular/forms";

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionService } from 'src/app/Services/section.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css'],
  
})
export class AddSectionComponent implements OnInit {
  sectionId: any;
  AddedSection!: FormGroup ;
  imageFile!: File;
  formData:FormData = new FormData()as FormData;

  constructor(private sectionService: SectionService, 
              private route: ActivatedRoute ,
              private router: Router,
              private fb: FormBuilder ) {}

              ngOnInit() {
                this.AddedSection = this.fb.group({
                  id: ['', Validators.required],
                  Name: ['', Validators.required],
                  Description: ['', Validators.required],
                  image: ['', Validators.required]
                });
              }

              showPreview(event: any) {
                const fileInput = event.target as HTMLInputElement;
                const files = fileInput.files;
                this.formData.append(`File1`,files![0]);
                }
                
              onSubmit() {
                const id = this.AddedSection.value.id;
                const Name = this.AddedSection.value.Name;
                const Description = this.AddedSection.value.Description;

                console.log(id);
                console.log(Name);
                console.log(Description);

               
                this.formData.append('id', id);
                this.formData.append('Name', Name);
                this.formData.append('Description', Description);
        
            
                console.log('Form data:', this.formData);
            
                this.sectionService.addSection(this.formData).subscribe(
                  (response) => {
                    console.log('Section created:', response);
                    this.AddedSection.reset();
                  },
                  (error) => {
                    console.error('Error creating section:', error);
                  }
                );
                this.router.navigate(['/section']);
              }

            }
  

                // onFileSelected(event: any) {
                //   const file = event.target.files[0];
                //   const fullPath = (<string>event.target.value).replace(/^.*\\/, "");
                //   console.log('Full path:', fullPath);
                //   const reader = new FileReader();
                //   reader.readAsDataURL(file);
                //   reader.onload = () => {
                //     const base64String = reader.result?.toString().split(',')[1];
                //     console.log('Base64 string:', base64String);
                //     this.AddedSection.patchValue({ imagePath: fullPath });
                //   };
                  
                // }

    