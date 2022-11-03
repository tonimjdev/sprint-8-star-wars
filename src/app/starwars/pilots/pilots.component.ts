import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css'],
})
export class PilotsComponent implements OnInit {
  get pilotsControl() {
    return this.starshipsService.pilotsControl;
  }
  get pilots() {
    return this.starshipsService.pilots;
  }

  idPilot(i: number) {
    return this.starshipsService.getIDPilot(i);
  }
  public urlImg: string =
    'https://starwars-visualguide.com/assets/img/characters/';

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {}
}
