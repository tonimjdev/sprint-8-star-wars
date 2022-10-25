import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  StarshipsResponse,
  Starships,
} from '../interfaces/starships.interface';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  public resultados: Starships[] = [];
  public naveLlamada: any;
  public idNave: number = 0;
  public urlImagen: string = '';
  public page: number = 1;

  constructor(private http: HttpClient) {}

  // GET listado naves
  buscarNaves() {
    console.log('Dentro Servicio API naves');
    this.http
      .get<StarshipsResponse>(
        `https://swapi.dev/api/starships/?page=${this.page}`
      )
      .subscribe((resp) => {
        this.resultados.push(...resp.results);
        this.page++;
        console.log('Resultados, ', this.resultados);
      });
  }

  // Obtener la ID de la nave
  llamarFicha(index: number) {
    this.naveLlamada = this.resultados[index];
    console.log('Nave desde Servicio', this.naveLlamada);
    //Obtención id nave a través del parámetro url del objeto
    this.idNave = this.naveLlamada.url.replace(/[^0-9]+/g, '');
    console.log('ID nave llamada: ', this.idNave);
    return this.naveLlamada;
  }

  // Reset naves
  borrarNaves() {
    this.resultados = [];
    this.page = 1;
  }
}
