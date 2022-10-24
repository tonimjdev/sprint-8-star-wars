import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {

  public naveLlamada:any;

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

  constructor(private starshipsService: StarshipsService) {}

  ngOnInit(): void {}
}
