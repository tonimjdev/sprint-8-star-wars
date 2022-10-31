import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pilots } from '../interfaces/pilots.interface';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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

  public pilots: Pilots[] = [];
  public pilotsControl: boolean = false;

  constructor(private http: HttpClient) {}

  // *** STARSHIPS *** //
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

  // *** PILOTS *** //
  // GET listado pilotos
  buscarPilotos(idPilot: number) {
    console.log('Dentro Servicio API pilotos');
    this.http
      .get<Pilots>(`https://swapi.dev/api/people/${idPilot}`)
      .subscribe((resp) => {
        this.pilots.push(resp);
        console.log('respuesta API', resp);
        console.log('array pilots', this.pilots);
      });
  }
  // Llamar pilotos de la nave seleccionada
  llamarPilotos(index: number) {
    this.naveLlamada = this.resultados[index];
    console.log(
      'Nave llamada desde servicio llamarPilotos: ',
      this.naveLlamada
    );
    console.log('Longiud array pilotos: ', this.naveLlamada.pilots.length);
    if (this.naveLlamada.pilots.length < 1) {
      this.pilotsControl = false;
      return;
    } else {
      this.pilots = [];
      for (let i = 0; i < this.naveLlamada.pilots.length; i++) {
        this.buscarPilotos(this.naveLlamada.pilots[i].replace(/[^0-9]+/g, ''));
      }
      this.pilotsControl = true;
    }
  }
  getIDPilot(i: number) {
    return this.pilots[i].url.replace(/[^0-9]+/g, '');
  }
}
