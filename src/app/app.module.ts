import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SectionComponent } from './Components/section/section.component';
import { SectionDetailsComponent } from './Components/section-details/section-details.component';
import { UpdateSectionComponent } from './Components/update-section/update-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSectionComponent } from './Components/add-section/add-section.component';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { TechnicalComponent } from './Components/technical/technical.component';
import { SectionFullDetailsComponent } from './Components/section-full-details/section-full-details.component';
import { ProblemSectionComponent } from './Components/problem-section/problem-section.component';
import { TechnicalSectionComponent } from './Components/technical-section/technical-section.component';
import { KeyWordSectionComponent } from './Components/key-word-section/key-word-section.component';
import { TechnicalProfileComponent } from './Components/technical-profile/technical-profile.component';
import { Location } from '@angular/common';
import { AllReviewsComponent } from './Components/all-reviews/all-reviews.component';
import { ReviewDetailsComponent } from './Components/review-details/review-details.component';
import { AllProblemsComponent } from './Components/all-problems/all-problems.component';
import { ProblemDetailsComponent } from './Components/problem-details/problem-details.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { ReportDetailsComponent } from './Components/report-details/report-details.component';
import { ReviewCheckComponent } from './Components/review-check/review-check.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import {ChartModule} from 'angular-highcharts';
import { LoginComponent } from './Components/login/login.component'





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionComponent,
    SectionDetailsComponent,
    UpdateSectionComponent,
    AddSectionComponent,
    AdminLayoutComponent,
    TechnicalComponent,
    SectionFullDetailsComponent,
    ProblemSectionComponent,
    TechnicalSectionComponent,
    KeyWordSectionComponent,
    TechnicalProfileComponent,
    AllReviewsComponent,
    ReviewDetailsComponent,
    AllProblemsComponent,
    ProblemDetailsComponent,
    ReportsComponent,
    ReportDetailsComponent,
    ReviewCheckComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [Location ],
  bootstrap: [AppComponent]
})
export class AppModule { }
