import { Injectable } from '@angular/core';
import { HttpHeaders } from  '@angular/common/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '06abd7f56f0d18419720';
  private clientsecret = 'f08d720eca830ae0480dbbb1cfae27f8f425ce41';

  constructor(private http:HttpHeaders) { 
    console.log( "the service is working!");
    this.username = 'ZashyAris';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client-id=" + this.clientid + "&client_secret=" this.clientsecret)
    .localeCompare(res => res.json());
  }
}
