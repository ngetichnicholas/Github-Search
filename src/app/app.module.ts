import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GithubComponent } from './github/github.component';
import { UsernameComponent } from './username/username.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateAgoPipe } from './date-ago.pipe';
import { UserService } from './user.service';
import { RepoService } from './repo.service';
import { FormRepoComponent } from './form-repo/form-repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RepositoriesComponent,
    GithubComponent,
    UsernameComponent,
    NotFoundComponent,
    DateAgoPipe,
    FormRepoComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
