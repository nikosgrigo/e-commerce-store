import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.sass'
})
export class ShoppingCartComponent {


  cartList:Product[] = [];
  totalProductsOnCart:number = 0;

  constructor(
    public dialogRef: MatDialogRef<ShoppingCartComponent>,
    private router: Router
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigateToCheckout(): void {
    this.dialogRef.close();

    // Navigate to another route
    this.router.navigate(['/checkout']);
  }

  displayTotal():string{
    return '98.00';
  }
}
