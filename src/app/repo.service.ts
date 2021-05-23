import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repo } from './repository';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
repo:Repo[]=[];
token=`?access_token=${environment.myApi}`;
userUrl=`https://api.github.com/users/`;
  constructor(public http:HttpClient) { }
  findRepo(searchUser:string): Observable<any>{
    return this.http.get(this.userUrl + searchUser + '/repos'+ this.token);
  }
}