import { Component } from '@angular/core';

// Modal bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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

  constructor(public loginModal: NgbModal, private fb: FormBuilder) {}

  submitLogin() {
    this.submit = true;
  }
}
