import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WriteService } from './../../../../core/services/write/write.service';
import { UserService } from './../../../../core/services/user/user.service';
import { ProfileService } from './../../../../core/services/profile/profile.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
})
export class WriteComponent implements OnInit {
  form: FormGroup;
  name: any;
  constructor(
    private formBuilder: FormBuilder,
    private writeService: WriteService,
    private userService: UserService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getName();
  }
  
  getName(): any{
    const user = this.userService.getValueTokenKey("user_id");
    this.profileService.getUserVars(user)
      .valueChanges
      .subscribe((result: any) => {
        this.name = result.data && result.data.getUserInfo.name;
      });
  }

  createLetter(event: Event): void {
    const user = this.userService.getValueTokenKey('user_id');
    const content = this.textField.value;
    event.preventDefault();
    this.writeService
      .addLetter(user, this.name, content)
      .subscribe(({ data: { createLetter } }) => {
        this.textField.reset();
        this.openSnackBar(createLetter.message);
      });
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required]],
    });
  }
  get textField(): string | any {
    return this.form.get('text');
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
}
