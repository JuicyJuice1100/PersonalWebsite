import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserConfig } from '../../config/user.config';
import { DocumentRefService } from '../../services/documentRef.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit, AfterViewChecked {

  public longDescription: String = UserConfig.about.longDescription;
  public shotDescription: String = UserConfig.about.shortDescription;
  public email: String = UserConfig.about.email;
  public location: String = UserConfig.about.location;
  public job: String = UserConfig.about.job;
  public social: Array<Object> = UserConfig.social;

  constructor(private titleService: Title, private docRef: DocumentRefService) { }

  ngOnInit() {
    this.titleService.setTitle('About - Justin L. Espiritu');
  }

  ngAfterViewChecked() {
    const el  = this.docRef.nativeElement.getElementById('aboutLongDescription');

    if (el !== null && el !== undefined) {
      el.innerHTML = this.longDescription;
    }
  }
}
