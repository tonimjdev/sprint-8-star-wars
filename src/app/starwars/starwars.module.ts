import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StarshipsComponent } from './starships/starships.component';
import { StarshipcardComponent } from './starshipcard/starshipcard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PilotsComponent } from './pilots/pilots.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PilotsComponent,
    FilmsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent,
    InfiniteScrollModule,
    LoginComponent,
    SignupComponent,
  ]
})
export class StarwarsModule { }
