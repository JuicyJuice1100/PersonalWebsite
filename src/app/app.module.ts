import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Routing } from './app.routing';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EmbededResumeComponent } from './components/resume/embeded-resume/embeded-resume.component';
import { ResumeHeaderComponent } from './components/resume/embeded-resume/resume-header/resume-header.component';
import { ResumeEducationComponent } from './components/resume/embeded-resume/resume-education/resume-education.component';
import { ResumeExperienceComponent } from './components/resume/embeded-resume/resume-experience/resume-experience.component';
import { ResumeProjectsComponent } from './components/resume/embeded-resume/resume-projects/resume-projects.component';
// tslint:disable-next-line: max-line-length
import { ProjectsPersonalComponent } from './components/resume/embeded-resume/resume-projects/projects-personal/projects-personal.component';
// tslint:disable-next-line: max-line-length
import { ProjectsProfessionalComponent } from './components/resume/embeded-resume/resume-projects/projects-professional/projects-professional.component';

import { DocumentRefService } from './services/documentRef/documentRef.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavigationComponent,
      PortfolioComponent,
      ContactComponent,
      FooterComponent,
      OverviewComponent,
      ResumeComponent,
      EmbededResumeComponent,
      ResumeHeaderComponent,
      ResumeEducationComponent,
      ResumeExperienceComponent,
      ResumeProjectsComponent,
      ProjectsPersonalComponent,
      ProjectsProfessionalComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FontAwesomeModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      Routing
   ],
   providers: [
      DocumentRefService
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
