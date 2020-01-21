import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];

  constructor(private profileservice: ProfileService) {
    this.profileservice.getProfileInfo().subscribe(Profile => {
      console.log(Profile);
      this.profile = profile;
    });
   }

  ngOnInit() {
  }

}
