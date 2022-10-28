import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../starwars/services/starships.service';
import { UsersService } from '../../starwars/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get userLogged() {
   return this.usersService.loggedUser;
  }
  constructor( private starshipsService: StarshipsService,
                private usersService: UsersService) { }

  ngOnInit(): void {
  }
  listadoNaves() {
    console.log('Antes Servicio')
    this.starshipsService.buscarNaves();
  }

}
