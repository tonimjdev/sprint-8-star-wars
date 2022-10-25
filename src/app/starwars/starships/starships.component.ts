import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {

  public naveLlamada:any;

  // variables para el scroll
  public finishPage:number = 3;
  public actualPage: number;

  // Getters
  get resultados() {
    return this.starshipsService.resultados;
  }
  get resultados2() {
    return this.starshipsService.resultados2;
  }
  get resultados3() {
    return this.starshipsService.resultados3;
  }

  llamarNave(index: number, arrayNaves: number) {
    console.log('El index de la nave llamada es: ', index);
    this.naveLlamada = this.starshipsService.llamarFicha(index, arrayNaves);
    console.log('Nave llamada: ', this.naveLlamada);
  }

  cargarMasNaves() {
    this.starshipsService.buscarNaves();
  }

  // Método para implementar el infinite scroll segun total páginas a cargar
  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.cargarMasNaves();
      this.actualPage ++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  constructor(private starshipsService: StarshipsService) {
    // Inicializamos en 1 cada vez que entramos
    this.actualPage = 1;
  }

  ngOnInit(): void {
    // Reseteamos naves al iniciar
    this.starshipsService.borrarNaves();
    // Cargamos naves
    this.cargarMasNaves();
  }
}
