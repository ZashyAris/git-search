import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:any;
  username: string;
  repos: any;

  constructor(public profileService: ProfileService) {
    
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })
   }

   findProfile(){
    this.profileService.updateProfile(this.username);
    
    this.profileService.getProfileInfo().subscribe(profile => {
     console.log(profile);
     this.profile = profile;
   });
   this.profileService.getProfileRepos().subscribe(repos=> {
     console.log(repos);
     this.repos = repos;
   });
  }

  ngOnInit() {
  }

}
