import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../starwars/services/starships.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private starshipsService: StarshipsService) { }

  ngOnInit(): void {
  }
  listadoNaves() {
    console.log('Antes Servicio')
    this.starshipsService.buscarNaves();
  }
}
