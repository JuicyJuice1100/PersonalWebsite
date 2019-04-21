import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserConfig } from '../../config/user.config';
import { DocumentRefService } from '../../services/documentRef.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  public welcomeMsg: String;
  public longDescription: Array<String>;
  public email: String;
  public social: Array<any>;
  public subCategories: Array<any>;

  constructor(private titleService: Title, private docRef: DocumentRefService) {
    this.welcomeMsg = UserConfig.about.welcomeMsg;
    this.longDescription = UserConfig.about.longDescription;
    this.email = UserConfig.info.email;
    this.social = UserConfig.social;
    this.subCategories = UserConfig.home.titles;
  }

  ngOnInit() {
    this.titleService.setTitle('About - Justin L. Espiritu');
  }

  // ngAfterViewChecked() {
  //   const el  = this.docRef.nativeElement.getElementById('aboutLongDescription');

  //   if (el !== null && el !== undefined) {
  //     el.innerHTML = this.longDescription;
  //   }
  // }
}
