import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // Recuperamos datos del Localstorage en el inicio
    this.usersService.getUserNameLogFromLS('userNameLog');
    this.usersService.checkLoginControl();
  }
}
