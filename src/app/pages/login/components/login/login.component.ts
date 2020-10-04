import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  section = 'login';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  signIn(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const email = this.emailField.value;
      const password = this.passwordField.value;
      this.authService.login_graphql(email, password)
      .subscribe(({ data: { loginAccount }}) => {
        if (loginAccount.token) {
          this.openSnackBar(loginAccount.message);
          localStorage.setItem('token', loginAccount.token);
          this.router.navigate(['/write']);
        }
      })
    }
  }

  openSnackBar(message: string): any {
    this._snackBar.open(message, 'x', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get emailField(): string | any {
    return this.form.get('email');
  }
  get passwordField(): string | any {
    return this.form.get('password');
  }

}
