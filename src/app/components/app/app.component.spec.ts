import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AboutComponent } from '../about/about.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AboutComponent
      ],
    }).compileComponents();
  }));
});
