import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('(3) TEST del componente "LoginComponent"', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería retornar formulario inválido', () => {
    const email = component.loginForm.controls['emailForm'];
    email.setValue('hola@hola.es');
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('Debería retornar formulario válido', () => {
    const email = component.loginForm.controls['emailForm'];
    const password = component.loginForm.controls['passForm'];
    email.setValue('hola@hola.es');
    password.setValue('1234');
    expect(component.loginForm.invalid).toBeFalse();
  });
});
