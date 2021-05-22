import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {

  profiles: any;
  repos: any;
  username:string;

  constructor(private profileService: GithubService) { }

  ngOnInit(): void {
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


}
