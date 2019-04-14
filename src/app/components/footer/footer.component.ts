import { Component, OnInit } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  email: String;
  social: Object[];

  constructor() {
    this.email = UserConfig.about.email;
    this.social = UserConfig.social;
  }

  ngOnInit() {
  }

}
