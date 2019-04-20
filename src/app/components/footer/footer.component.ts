import { Component, OnInit, HostListener } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name: String;
  email: String;
  social: Array<any>;

  constructor() {
    this.name = UserConfig.info.name;
    this.email = UserConfig.info.email;
    this.social = UserConfig.social;
  }

  ngOnInit() {
  }

}
