import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StarshipsResponse, Starships } from '../interfaces/starships.interface';




@Injectable({
  providedIn: 'root'
})
export class StarshipsService {


  public resultados: Starships[] = [];

  constructor( private http: HttpClient ) { }


buscarNaves() {
  console.log('Dentro Sericio');
  this.http.get<StarshipsResponse>('https://swapi.dev/api/starships')
  .subscribe( ( resp ) => {
    this.resultados = resp.results;
  });
}

}