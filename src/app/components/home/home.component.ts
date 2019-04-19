import { Component, OnInit } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeMsg: String;
  public name: String;
  // public title: String = UserConfig.home.title;
  public titles: Array<any>;

  constructor() {
    this.name = UserConfig.info.name;
    this.titles = UserConfig.home.titles;
  }

  ngOnInit() {
  }

}
