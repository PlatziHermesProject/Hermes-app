import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../../core/services/register/register.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  section = 'register';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private _snackBar: MatSnackBar
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
          if (createAccount === 'HS-001') {
            this.openSnackBar(createAccount.message);
          } else {
            this.openSnackBar(createAccount.message);
            this.router.navigate(['/login']);
          }
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

  openSnackBar(message: string): any {
    this._snackBar.open(message, 'x', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
