import { Component, OnInit } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  profile: any;
  name: String;
  email: String;
  location: String;
  job: any;

  constructor() {
    this.profile = UserConfig.info.picture;
    this.name = UserConfig.info.name;
    this.email = UserConfig.info.email;
    this.location = UserConfig.overview.location;
    this.job = UserConfig.overview.job;
  }

  ngOnInit() {
  }

}
