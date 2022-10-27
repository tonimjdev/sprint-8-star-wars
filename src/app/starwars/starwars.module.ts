import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipcardComponent } from './starshipcard/starshipcard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent,
    InfiniteScrollModule,
    LoginComponent
  ]
})
export class StarwarsModule { }
