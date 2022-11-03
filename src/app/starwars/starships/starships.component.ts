import { Component, OnInit } from '@angular/core';
// Services
import { StarshipsService } from '../services/starships.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  public naveLlamada: any;

  // Variables para el scroll
  public finishPage: number = 4;
  public actualPage: number;

  // Getter ARRAY NAVES
  get resultados() {
    return this.starshipsService.resultados;
  }

  get loginControl() {
    return this.usersService.loginControl;
  }

  llamarNave(index: number) {
    console.log('El index de la nave llamada es: ', index);
    this.naveLlamada = this.starshipsService.llamarFicha(index);
    console.log('Nave llamada: ', this.naveLlamada);
    this.starshipsService.llamarPilotos(index);
    this.starshipsService.llamarFilms(index);
  }

  cargarMasNaves() {
    this.starshipsService.buscarNaves();
  }

  // Método para implementar el infinite scroll segun total páginas a cargar
  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.cargarMasNaves();
      this.actualPage++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  constructor(
    private starshipsService: StarshipsService,
    private usersService: UsersService
  ) {
    // Inicializamos en 1 cada vez que entramos
    this.actualPage = 1;
  }

  ngOnInit(): void {
    // Recuperamos datos desde Localstorage
    this.usersService.checkLoginControl();
    this.usersService.getUserNameLogFromLS('userNameLog');
    // Check Login Control
    if (!this.usersService.loginControl) {
      alert('You must be logged in to access this area!');
      this.starshipsService.borrarNaves();
      return;
    } else {
      // Reseteamos naves al iniciar
      this.starshipsService.borrarNaves();
      // Cargamos naves
      this.cargarMasNaves();
    }
  }
}
