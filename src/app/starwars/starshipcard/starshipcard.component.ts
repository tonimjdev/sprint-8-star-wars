import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starshipcard',
  templateUrl: './starshipcard.component.html',
  styleUrls: ['./starshipcard.component.css']
})
export class StarshipcardComponent implements OnInit {

  get fichaNave () {
    return this.starshipsService.naveLlamada;
  }
  get idNave() {
    return this.starshipsService.indexNave;
  }

  public urlImg: string = 'https://starwars-visualguide.com/assets/img/starships/';

  constructor( private starshipsService: StarshipsService ) { }

  ngOnInit(): void {
  }
 
}
