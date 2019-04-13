import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app.routing';

import { AppComponent } from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
   ],
   imports: [
      BrowserModule,
      Routing
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      AboutComponent
   ]
})

export class AppModule { }
