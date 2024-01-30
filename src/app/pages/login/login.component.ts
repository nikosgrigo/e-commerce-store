import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent implements OnInit {

  formGroup!: any;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      password: new FormControl<string>('', [Validators.minLength(2), Validators.required])
    });

  }

  onSubmit():void{
    console.table(this.formGroup.value);
  }

}
