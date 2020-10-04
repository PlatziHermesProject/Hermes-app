import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WriteService } from './../../../../core/services/write/write.service';
import { UserService } from './../../../../core/services/user/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private writeService: WriteService,
    private _snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  createLetter(event: Event): void {
    const user = this.userService.getValueTokenKey("user_id");
    const name = "Yasare";
    const content = this.textField.value;
    event.preventDefault();
    this.writeService.addLetter(user, name, content)
      .subscribe(({ data: { createLetter }}) => {
        this.textField.reset();
        this.openSnackBar(createLetter.message);
      })
  }


  buildForm(): void {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required]]
    });
  }
  get textField(): string | any {
    return this.form.get('text');
  }

  openSnackBar(message: string): any {
    this._snackBar.open(message, 'x', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
