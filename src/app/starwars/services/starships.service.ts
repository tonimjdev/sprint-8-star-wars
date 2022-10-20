import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarshipsResponse, Starships } from '../interfaces/starships.interface';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {


  public resultados: Starships[] = [];
  public naveLlamada: any;
  public indexNave: number = 0;

  constructor( private http: HttpClient ) { }

buscarNaves() {
  console.log('Dentro Servicio API naves');
  this.http.get<StarshipsResponse>('https://swapi.dev/api/starships')
  .subscribe( ( resp ) => {
    this.resultados = resp.results;
    console.log(this.resultados);
  });
}

llamarFicha(id:number) {
  this.naveLlamada = this.resultados[id];
  console.log('Nave desde Servicio', this.naveLlamada);
  this.indexNave=id+1;
}

}