import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  profiles: any;
  repos: any;
  username:string;
  constructor(private profileService: GithubService) {


  }
  findProfiles(){
  	this.profileService.updateProfile(this.username);
  	// tslint:disable-next-line: indent
  	// tslint:disable-next-line: indent
  	this.profileService.getProfileInfo().subscribe(profile => {
  		console.log(profile);
  		// tslint:disable-next-line: indent
  		this.profiles = profile;
  	// tslint:disable-next-line: indent
  	});

  	this.profileService.getProfileRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	})
  }

  ngOnInit(): void {
  }

}