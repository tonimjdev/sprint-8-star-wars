import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';



@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarshipsComponent
  ]
})
export class StarwarsModule { }
