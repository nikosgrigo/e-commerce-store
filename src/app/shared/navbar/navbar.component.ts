import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { UserAuthenticationService } from '../../services/user-authentication.service';

import { AsyncPipe } from '@angular/common';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, AsyncPipe, MatDialogModule, MatButtonModule, ShoppingCartComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  // Assuming you have a user$ observable in your UserService
  user$ = this.authService.user$;

  constructor(private authService: UserAuthenticationService,
    public dialog: MatDialog) {}

  logOut(user:User):void{
    console.log(`User - ${user.firstName} logged out!`)

    //Delete token for current user
    localStorage.setItem('token','');

    //Log out user 
    this.authService.logOutUser();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      height: 'auto',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

}

}