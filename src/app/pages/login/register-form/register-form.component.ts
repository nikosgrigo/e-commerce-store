import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { UserAuthenticationService } from '../../../services/user-authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatTabsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.sass'
})
export class RegisterFormComponent {

  formGroup!: any;

  constructor(private auth: UserAuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      email: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      password: new FormControl<string>('', [Validators.minLength(2), Validators.required]),

      phone: new FormControl('', [Validators.required, Validators.pattern(/^[\d\s()-]*$/)]),
      firstName: new FormControl<string>('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(20), Validators.minLength(3)]),
      lastName: new FormControl<string>('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(20), Validators.minLength(3)]),
    });
  }

  onSubmit(): void {
    //Filter input fields before sending the request to the API

    //Insert filtered inputs
    const credentials = this.formGroup.value;

    //Call service to create a new user
    this.auth.createUser(credentials).subscribe((response) => {
      if (response) {
        this.router.navigateByUrl('/login');

        //Display notification message for user creation
      }

    });
  }
}
