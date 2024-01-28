import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink, RouterOutlet, ProductDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit  {

  products$!:Observable<Product[]>;
  productList: Product[] = [];

  constructor(private productService: ProductService,
    private router:Router) {
    this.products$ = this.productService.product$.pipe(
      // Use tap to update productList
      tap(products => {
        this.productList = products;
      })
    );
  }

  ngOnInit(): void {
    this.productService.getAllProducts();
  }


  // showProductDetails(productId:number):void{
  //   this.router.navigate(['/details', {id : productId}])
  
  // }
}
