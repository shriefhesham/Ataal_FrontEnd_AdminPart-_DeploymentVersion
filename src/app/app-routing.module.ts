import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './Components/section/section.component';
import { SectionDetailsComponent } from './Components/section-details/section-details.component';
import { UpdateSectionComponent } from './Components/update-section/update-section.component';
import { AddSectionComponent } from './Components/add-section/add-section.component';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { SectionFullDetailsComponent } from './Components/section-full-details/section-full-details.component';
import { ProblemSectionComponent } from './Components/problem-section/problem-section.component';
import { TechnicalComponent } from './Components/technical/technical.component';
import { TechnicalSectionComponent } from './Components/technical-section/technical-section.component';
import { KeyWordSectionComponent } from './Components/key-word-section/key-word-section.component';
import { TechnicalProfileComponent } from './Components/technical-profile/technical-profile.component';
import { AllReviewsComponent } from './Components/all-reviews/all-reviews.component';
import { ReviewDetailsComponent } from './Components/review-details/review-details.component';
import { AllProblemsComponent } from './Components/all-problems/all-problems.component';
import { ProblemDetailsComponent } from './Components/problem-details/problem-details.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ReportDetailsComponent } from './Components/report-details/report-details.component';
import { ReviewCheckComponent } from './Components/review-check/review-check.component';
import { LoginComponent } from './Components/login/login.component';



const routes: Routes = [
  {
    path: 'FullDetails',
    component: SectionFullDetailsComponent,
    children: [
      { path: '', redirectTo: '/FullDetails/KeyWordSection', pathMatch: 'full' },
      { path: 'ProblemSection', component: ProblemSectionComponent },
      { path: 'TechnicalSection', component: TechnicalSectionComponent },
      { path: 'KeyWordSection', component: KeyWordSectionComponent },
      
    ]
  },
  {path:"" , redirectTo:"Login" ,pathMatch:"full"},
  {path:"Login" , component:LoginComponent},
  {path:"Home" ,component:AdminLayoutComponent},
  {path:"section" ,component:SectionComponent},
  {path:"SectionDetails/:id" , component:SectionDetailsComponent},
  {path:"SectionFullDetails/:id" , component:SectionFullDetailsComponent},
  {path:"UpdateSection/:id" , component:UpdateSectionComponent},
  {path:"AddSection" , component:AddSectionComponent},
  {path:"TechnicalProfile/:id" , component:TechnicalProfileComponent},
  {path:"Technicals" , component:TechnicalComponent},
  {path:"Reviews" , component:AllReviewsComponent},
  {path:"ReviewDetails/:id" , component:ReviewDetailsComponent},
  {path:"Problems" , component:AllProblemsComponent},
  {path:"ProblemDetails/:id" , component:ProblemDetailsComponent},
  {path:"Reports" , component:ReportsComponent},
  {path:"ReportDetails/:id" , component:ReportDetailsComponent},
  {path:"ReviewCheck/:id" , component:ReviewCheckComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
