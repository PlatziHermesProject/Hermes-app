import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  section = 'login';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  signIn(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const email = this.emailField.value;
      const password = this.passwordField.value;
      this.authService
        .login_graphql(email, password)
        .subscribe(({ data: { loginAccount } }) => {
          console.log(loginAccount);
          if (loginAccount.token) {
            this.openSnackBar(loginAccount.message);
            localStorage.setItem('token', loginAccount.token);
            this.router.navigate(['/write']);
          } else {
            this.openSnackBar(loginAccount.message);
          }
        });
    }
  }

  openSnackBar(message: string): any {
    console.log({ message });
    const snackbar = document.getElementById('snackbar');
    snackbar.innerHTML = message;
    snackbar.className = 'show';
    setTimeout(() => {
      snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
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
