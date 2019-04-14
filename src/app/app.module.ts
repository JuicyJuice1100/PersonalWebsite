import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


import { DocumentRefService } from './services/documentRef.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      NavigationComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
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
