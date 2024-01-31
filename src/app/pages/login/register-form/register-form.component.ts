import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatTabsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.sass'
})
export class RegisterFormComponent {

  formGroup!: any;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      email: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      password: new FormControl<string>('', [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    console.table(this.formGroup.value);
  }
}
