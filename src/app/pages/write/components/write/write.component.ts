import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WriteService } from '../../../../core/services/write/write.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private writeService: WriteService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  createLetter(event: Event): void {
    const user = "7";
    const name = "Yasare";
    const content = this.textField.value;
    event.preventDefault();
    this.writeService.addLetter(user, name, content)
      .subscribe(({ data: { createLetter }}) => {
        console.log(createLetter.message);
        this.textField.reset();
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

}
