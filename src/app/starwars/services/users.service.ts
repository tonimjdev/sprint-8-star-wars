import { Injectable } from '@angular/core';

import { Users } from '../interfaces/users.interface';

@Injectable()
export class UsersService {
  // Variables
  contadorID: number = 0;
  loginControl: boolean = false;
  loggedUser: any = 'Guest';

  // Array usuarios de tipo Users
  usersArray: Users[] = [
    {
      id: 1,
      userName: 'Toni',
      userEmail: 'toni@hola.es',
      userPass: '1234',
    },
  ];

  // DATOS EN LOCALSTORAGE ****
  // Método para guardar array usuarios en el Localstorage
  saveToLocalStorage(listUsers: Users[]) {
    localStorage.setItem('listUsers', JSON.stringify(listUsers));
  }
  // Método para guardar el loginControl en el Localstorage
  loginControlToLS(loginC: boolean) {
    localStorage.setItem('loginC', JSON.stringify(loginC));
  }
  // Método para guardar name user logged
  nameToLS(userNameLog: string) {
    localStorage.setItem('userNameLog', userNameLog);
  }

  // Get usersArray from Localstorage
  getFromLocalStorage(key: string) {
    this.usersArray = JSON.parse(localStorage.getItem(key)!);
  }
  // Get loginControl from Localstorage
  getLoginControlFromLS(key: string) {
    this.loginControl = JSON.parse(localStorage.getItem(key)!);
  }
  // Get loggedUser from Localstorage
  getUserNameLogFromLS(key: string) {
    if (localStorage.getItem(key) == undefined) this.loggedUser = 'Guest';
    else this.loggedUser = localStorage.getItem(key);
  }
  // Check estado login control en Localstorage (Servicio)
  checkLoginControl() {
    this.getLoginControlFromLS('loginC');
  }

  // GESTIÓN USERS ****
  // Método para guardar nuevo usuario
  newUser(userName: string, userEmail: string, userPass: string) {
    console.log('Dentro servicio NEW USER');
    let id = this.contadorID + 1;
    this.contadorID++;
    this.usersArray.push({ id, userName, userEmail, userPass });
    this.saveToLocalStorage(this.usersArray);
    alert('Account Created successfully!');
    console.log('Array Users', this.usersArray);
  }

  // Método para comprobar que existe el usuario
  checkLogin(email: string, pass: string) {
    console.log('Dentro servicio CHECK LOGIN');
    const user = this.usersArray.find((user) => user.userEmail === email);
    user?.userPass === pass
      ? ((this.loginControl = true),
        alert(`Welcome ${user?.userName}`),
        this.loginControlToLS(this.loginControl))
      : alert('Email / Pass no valid');
    console.log('Usuario Logueado: ', user);
    console.log('loginControl: ', this.loginControl);
    // Logged User
    this.loggedUser = user?.userName;
    this.nameToLS(this.loggedUser);
  }

  // Método para Logout
  logout() {
    this.loginControl = false;
    this.loginControlToLS(this.loginControl);
    this.loggedUser = 'Guest';
    this.nameToLS(this.loggedUser);
    alert('Log Out Successful!');
  }

  constructor() {}
}
