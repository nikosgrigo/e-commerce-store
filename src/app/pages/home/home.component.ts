import { Component, OnInit } from '@angular/core';

import { AsyncPipe, JsonPipe } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit  {

  products$!:Observable<Product[]>;
  productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.products$ = this.productService.product$.pipe(
      // Use tap to update productList
      tap(products => {
        this.productList = products;
        console.log(products)
      })
    );
  }

  ngOnInit(): void {
    this.productService.getAllProducts();
  }

}
