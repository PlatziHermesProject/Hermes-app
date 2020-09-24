import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  section = 'register';
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
