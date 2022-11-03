import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  StarshipsResponse,
  Starships,
} from '../interfaces/starships.interface';
import { Pilots } from '../interfaces/pilots.interface';
import { Films } from '../interfaces/films.interface';


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

  public films: Films[] = [];
  public filmsControl: boolean = false;

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

  // *** FILMS *** //
  // GET listado películas
  buscarFilms(idFilm: number) {
    console.log('Dentro Servicio API películas');
    this.http
      .get<Films>(`https://swapi.dev/api/films/${idFilm}`)
      .subscribe((resp) => {
        this.films.push(resp);
        console.log('respuesta API', resp);
        console.log('array films', this.films);
      });
  }
  // Llamar films de la nave seleccionada
  llamarFilms(index: number) {
    this.naveLlamada = this.resultados[index];
    console.log(
      'Nave llamada desde servicio llamarFilms: ',
      this.naveLlamada
    );
    console.log('Longiud array films: ', this.naveLlamada.films.length);
    if (this.naveLlamada.films.length < 1) {
      this.filmsControl = false;
      return;
    } else {
      this.films = [];
      for (let i = 0; i < this.naveLlamada.films.length; i++) {
        this.buscarFilms(this.naveLlamada.films[i].replace(/[^0-9]+/g, ''));
      }
      this.filmsControl = true;
    }
  }
  getIDFilm(i: number) {
    return this.films[i].url.replace(/[^0-9]+/g, '');
  }
}
