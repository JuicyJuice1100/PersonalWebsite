import { Component, OnInit } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public welcomeMsg: String = UserConfig.home.welcomeMsg;
  public name: String = UserConfig.home.name;
  public title: String = UserConfig.home.title;

  constructor() { }

  ngOnInit() {
  }

}
