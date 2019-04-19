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
  public welcomeMsg: String = UserConfig.about.welcomeMsg;
  public longDescription: Array<String> = UserConfig.about.longDescription;
  public email: String = UserConfig.about.email;
  public social: Array<Object> = UserConfig.social;

  constructor(private titleService: Title, private docRef: DocumentRefService) { }

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
