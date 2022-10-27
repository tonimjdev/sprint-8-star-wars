import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StarwarsModule } from '../starwars/starwars.module';





@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StarwarsModule
   
    
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
