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
  public resultados2: Starships[] = [];
  public resultados3: Starships[] = [];
  public naveLlamada: any;
  public idNave: number = 0;
  public urlImagen: string = "";
  public page:number = 1;

  constructor(private http: HttpClient) {}

  // GET listado naves
  buscarNaves() {
    console.log('Dentro Servicio API naves');
    this.http
      .get<StarshipsResponse>(`https://swapi.dev/api/starships/?page=${this.page}`)
      .subscribe((resp) => {
        if (this.page === 1) this.resultados=resp.results;
        else if (this.page === 2) this.resultados2=resp.results;
        else this.resultados3=resp.results;
       
        this.page += this.page;
        console.log('Resultados 1, ', this.resultados);
        console.log('Resultados 2, ', this.resultados2);
        console.log('Resultados 3, ', this.resultados3);

      });
  }
  // Obtener la ID de la nave
  llamarFicha(index: number, arrayNaves: number) {
    if (arrayNaves===2) this.naveLlamada = this.resultados2[index];
    else if (arrayNaves===3) this.naveLlamada = this.resultados3[index];
    else this.naveLlamada = this.resultados[index];
    console.log('Nave desde Servicio', this.naveLlamada);
    //Obtención id nave a través del parámetro url del objeto
    this.idNave = this.naveLlamada.url.replace(/[^0-9]+/g, '');
    console.log('ID nave llamada: ', this.idNave);
  }

}