import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipcardComponent } from './starshipcard/starshipcard.component';



@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipcardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarshipsComponent,
    StarshipcardComponent
  ]
})
export class StarwarsModule { }
