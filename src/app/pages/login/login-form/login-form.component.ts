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

    const credentials = this.formGroup.value;

    this.auth.loginUser(credentials).subscribe((response) => {
      console.log('response', response);
      if(response){

        //Store user token for later use
        localStorage.setItem('token', response.token);

        //Display notification message for user creation

        //Navigate user to products page
        this.router.navigateByUrl('/products');


      }

    });
  }

}