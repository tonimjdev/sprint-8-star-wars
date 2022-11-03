import { Component, OnInit } from '@angular/core';

// Modal bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submit: boolean = false;

  // Formulario reactivo (validators para check email y password)
  loginForm: FormGroup = this.fb.group({
    emailForm: ['', [Validators.required, Validators.email]],
    passForm: ['', [Validators.required, Validators.minLength(4)]],
  });

  // Mensaje de error en el HTML si no pasa la validación
  esValido(campo: string) {
    return this.loginForm.controls[campo].errors;
  }

  constructor(
    public loginModal: NgbModal,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  // Check Login -> Service
  submitLogin() {
    this.submit = false;
    if (this.loginForm.status !== 'VALID') {
      this.submit = true;
      alert('Please, check the entered data');
    } else {
      this.usersService.checkLogin(
        this.loginForm.value.emailForm,
        this.loginForm.value.passForm
      );
      this.loginModal.dismissAll();
    }
  }
  ngOnInit(): void {}
}
