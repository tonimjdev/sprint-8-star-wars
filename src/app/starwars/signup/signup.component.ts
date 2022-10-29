import { Component, OnInit } from '@angular/core';

// Modal bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Services
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  submit: boolean = false;



 // Formulario reactivo (validators para check nombre, e-mail, password y terms)
  signupForm: FormGroup = this.fb.group({
  nameForm: ['', [Validators.required, Validators.minLength(3)]],
  emailForm: ['', [Validators.required, Validators.email]],
  passForm: ['', [Validators.required, Validators.minLength(4)]],
  termsForm: ['', [Validators.requiredTrue]]
});

// Mensaje de error en el HTML si no pasa la validación
  esValido(campo: string) {
  return this.signupForm.controls[campo].errors;
}

  constructor(public signupModal: NgbModal, 
    private fb: FormBuilder,
    private usersService: UsersService) {}

  submitSignup() {
    this.submit = false;
    if (
      this.signupForm.status !== 'VALID') 
      {
      this.submit = true;
      alert('Please, check the entered data');
    } else {
    this.usersService.newUser(this.signupForm.value.nameForm, 
      this.signupForm.value.emailForm, 
      this.signupForm.value.passForm);
      this.signupModal.dismissAll()}
  }

  ngOnInit(): void {
  }

}
