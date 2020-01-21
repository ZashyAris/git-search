import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public username:String;
  public  clientid = '06abd7f56f0d18419720';
  public  clientsecret = 'f08d720eca830ae0480dbbb1cfae27f8f425ce41';

  constructor(private http:HttpClient) { 
    console.log( "the service is working!");
    this.username = 'ZashyAris';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&clientsecret=" + this.clientsecret);
  
  };

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   }

  updateProfile(username: string){
  this.username = username;
   }

}