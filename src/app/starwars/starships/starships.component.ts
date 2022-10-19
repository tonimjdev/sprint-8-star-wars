import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  get resultados() {
    return this.starshipsService.resultados;
  }

  constructor( private starshipsService: StarshipsService) { }

  ngOnInit(): void {
  }

}
