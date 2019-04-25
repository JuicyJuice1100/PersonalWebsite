import { Component, OnInit } from '@angular/core';
import { UserConfig } from '../../config/user.config';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: String;

  constructor() {
    this.resume = UserConfig.resume.url;
  }

  ngOnInit() {
  }

}
