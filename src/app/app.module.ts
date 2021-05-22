import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { GithubComponent } from './github/github.component';
import { UsernameComponent } from './username/username.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubService } from './services/github.service';
import { DateAgoPipe } from './date-ago.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RepositoriesComponent,
    GithubComponent,
    UsernameComponent,
    NotFoundComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
