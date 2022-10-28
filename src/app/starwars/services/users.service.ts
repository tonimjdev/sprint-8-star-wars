import { Injectable } from '@angular/core';

import { Users } from '../interfaces/users.interface';

@Injectable()
export class UsersService {

  // Variables
  contadorID: number = 0;

  // Array usuarios de tipo Users
  usersArray: Users[] = [];

  // Método para guardar nuevo usuario

  newUser(userName:string, userEmail:string, userPass:string) {
    console.log('Dentro servicio NEW USER');
    let id = this.contadorID+1;
    this.usersArray.push({ id, userName, userEmail, userPass });
    console.log('Array Users', this.usersArray);
  }

  constructor() { }
}
