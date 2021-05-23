import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repository';
import { RepoService } from '../repo.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  Users:User;
  Repos:Repo[]=[]
  constructor(public userHttpService:UserService) { 

  }

  ngOnInit() {
    this.searchGit("Nyagah-Tech")
    // this.userServ.userFuction()
    // this.user = this.userServ.user
    // console.log(this.user)

 }
searchGit(searchTerm){
  this.userHttpService.searchGits(searchTerm).then(
    (success)=>{
      this.Users = this.userHttpService.Users;
      
      // console.log(this.Users.login)
    },
    (error)=>{
      console.log(error)
    })
    this.userHttpService.searchRepos(searchTerm).then(
            (success)=>{
            this.Repos=this.userHttpService.Repos
             
             
  
    })
  }
// searchGit(searchTerm){
//   this.userHttpService.searchRepos(searchTerm).then(
//     (success)=>{
      
//       alert(this.Repos)
//       console.log(this.Repos)
//     }
//   )
// }


}
