import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { GithubComponent } from './github/github.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsernameComponent } from './username/username.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'username', component: UsernameComponent},
  { path: 'repositories', component: RepositoriesComponent},
  { path:'*', component:NotFoundComponent},

  { path: '', redirectTo:"/github", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
