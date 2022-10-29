import { Injectable } from '@angular/core';

import { Users } from '../interfaces/users.interface';

@Injectable()
export class UsersService {

  // Variables
  contadorID: number = 0;
  loginControl: boolean = false;
  loggedUser: any = "Guest";

  // Array usuarios de tipo Users
  usersArray: Users[] = [
    {
      id: 1,
      userName: "Toni",
      userEmail: "toni@hola.es",
      userPass: "1234"
    }
  ];

  // Método para guardar nuevo usuario
  newUser(userName:string, userEmail:string, userPass:string) {
    console.log('Dentro servicio NEW USER');
    let id = this.contadorID+1;
    this.contadorID++;
    this.usersArray.push({ id, userName, userEmail, userPass });
    alert('Account Created successfully!')
    console.log('Array Users', this.usersArray);
  }

  // Método para comprobar que existe el usuario
  checkLogin(email:string, pass:string) {
    console.log('Dentro servicio CHECK LOGIN');
    const user = this.usersArray.find( user => user.userEmail === email ) ;
    (user?.userPass === pass) ? (this.loginControl=true, alert(`Welcome ${user?.userName}`)) : alert ('Email / Pass no valid')
    console.log ('Usuario: ', user);
    console.log ('loginControl: ', this.loginControl);
    // Logged User
    this.loggedUser = user?.userName;
  }

  // Método para Logout
  logout(){
    this.loginControl = false;
    this.loggedUser = "Guest";
    alert('Log Out Successful!')
  }

  constructor() { }
}
