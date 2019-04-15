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
  social: Object[];

  constructor() {
    this.name = UserConfig.home.name;
    this.email = UserConfig.about.email;
    this.social = UserConfig.social;
  }

  @HostListener ('mouseenter')
  onMouseEnter() {
    // TODO: animate showing email address
  }

  @HostListener ('mouseleave')
  onmouseleave() {
    // TODO:  animate hiding email address
  }

  ngOnInit() {
  }

}
