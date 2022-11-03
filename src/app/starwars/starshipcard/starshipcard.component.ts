import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-starshipcard',
  templateUrl: './starshipcard.component.html',
  styleUrls: ['./starshipcard.component.css'],
})
export class StarshipcardComponent implements OnInit {
  get fichaNave() {
    return this.starshipsService.naveLlamada;
  }
  get idNave() {
    return this.starshipsService.idNave;
  }
  get loginControl() {
    return this.usersService.loginControl;
  }

  public urlImg: string =
    'https://starwars-visualguide.com/assets/img/starships/';

  constructor(
    private starshipsService: StarshipsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // Recuperamos datos desde Localstorage
    this.usersService.checkLoginControl();
    this.usersService.getUserNameLogFromLS('userNameLog');
    // Check Login Control
    if (!this.usersService.loginControl) {
      alert('You must be logged in to access this area!');
      this.starshipsService.borrarNaves();
      return;
    }
  }
}
