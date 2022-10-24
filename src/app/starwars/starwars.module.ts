import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipcardComponent } from './starshipcard/starshipcard.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarshipsComponent,
    StarshipcardComponent,
    HomeComponent
  ]
})
export class StarwarsModule { }
