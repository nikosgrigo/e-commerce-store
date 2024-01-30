import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { RouterLink, RouterOutlet } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink, RouterOutlet,
    ProductDetailsComponent, MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent{

  pageSize: number = 8;
  pageIndex: number = 0

  productList: Product[] = [];

  products$: Observable<Product[]> = this.productService.getAllProducts(this.pageSize, this.pageIndex);
  productsList$: Observable<Product[]> = this.productService.product$.pipe(
    map(products => {
      this.productList = products;
      return products;
    }));


  constructor(private productService: ProductService) { }

  onPageChange(event: PageEvent) {
    const skip = event.pageIndex * event.pageSize;

    this.productService.getAllProducts(event.pageSize, skip).subscribe(products =>{
      this.productList = products;
    })
  }


}
