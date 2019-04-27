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
      EmbededResumeComponent
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
