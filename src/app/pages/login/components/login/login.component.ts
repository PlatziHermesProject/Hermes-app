import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  section = 'login';
  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  signIn(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.router.navigate(['/inbox']);
    }
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
