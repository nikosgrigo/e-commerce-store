import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatTabsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.sass'
})
export class LoginFormComponent implements OnInit {

  formGroup!: any;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      password: new FormControl<string>('', [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    console.table(this.formGroup.value);
  }

}