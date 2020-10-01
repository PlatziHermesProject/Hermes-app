import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  section = 'register';
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  signIn(event: Event): void {
    event.preventDefault();
    const email = this.emailField.value;
    const password = this.passwordField.value;
    const name = this.nameField.value;
    if (this.form.valid) {
      this.registerService.submitRegister(email, password, name)
        .subscribe(({ data: { createAccount } }) => {
          createAccount.code === 'HS-001' ?
            console.log(createAccount.message) :
            (console.log(createAccount.message),
            this.router.navigate(['/inbox']));
        }, (error: any) => {
          console.log('Error', error);
        });
    }
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get nameField(): string | any {
    return this.form.get('name');
  }
  get emailField(): string | any {
    return this.form.get('email');
  }
  get passwordField(): string | any {
    return this.form.get('password');
  }
}
