import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { UserAuthenticationService } from '../../../services/user-authentication.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatTabsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.sass'
})
export class LoginFormComponent implements OnInit {

  formGroup!: any;

  constructor(private auth:UserAuthenticationService,
    private router:Router){}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      password: new FormControl<string>('', [Validators.minLength(2), Validators.required])
    });
  }

  onSubmit(): void {
    console.table(this.formGroup.value);

    const credentials = this.formGroup.value;

    this.auth.loginUser(credentials).subscribe((response) => {
      console.log('response', response);
      if(response){
        localStorage.setItem('token', response.token);
        // this.auth.currentUser.set(response);
        this.router.navigateByUrl('/products');
      }

    });
  }

}