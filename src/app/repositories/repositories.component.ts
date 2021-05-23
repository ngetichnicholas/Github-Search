import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from '../repository';
// import { GitserviceService } from '../gitservice.service';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  Repos:Repo[]=[]
 

  constructor(public gitRepoService:RepoService) {}
  findRepo(repoTerm){
    this.gitRepoService.findRepo(repoTerm).subscribe(
      (success)=>{
        this.Repos=success
        return (this.Repos);      }
    )
    
  }

  ngOnInit() {
    this.findRepo("ngetichnicholas")
  }

}


   