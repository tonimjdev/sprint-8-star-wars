import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  get filmsControl() {
    return this.starshipsService.filmsControl;
  }
  get films() {
    return this.starshipsService.films;
  }

  idFilm(i: number) {
    return this.starshipsService.getIDFilm(i);
  }

  public urlImg: string = 'https://starwars-visualguide.com/assets/img/films/';

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {}
}
