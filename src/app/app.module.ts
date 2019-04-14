import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing';

import { AppComponent } from './components/app/app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';


import { DocumentRefService } from './services/documentRef.service';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
      NavigationComponent
   ],
   imports: [
      BrowserModule,
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
