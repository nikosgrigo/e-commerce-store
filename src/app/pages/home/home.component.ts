import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit  {

  productList:any = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productList = []//get data from the service
  }

}
