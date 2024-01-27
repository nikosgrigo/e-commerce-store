import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit  {

  productList!:Product[];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productList = [
      {
        id: 1,
        title: "iPhone 15",
        description: "An apple mobile which is nothing like apple",
        price: 1.049,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.mobilesyrup.com/wp-content/uploads/2022/11/iphone-15-pro-black-scaled.jpg",
        images: ["path/to/image1_1.jpg", "path/to/image1_2.jpg", "path/to/image1_3.jpg"],
      },
      {
        id: 2,
        title: "Samsung Galaxy S21",
        description: "A powerful Android smartphone from Samsung",
        price: 699,
        discountPercentage: 8.5,
        rating: 4.75,
        stock: 120,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "path/to/thumbnail2.jpg",
        images: ["path/to/image2_1.jpg", "path/to/image2_2.jpg", "path/to/image2_3.jpg"],
      },
      {
        id: 3,
        title: "MacBook Pro",
        description: "A high-performance laptop from Apple",
        price: 1299,
        discountPercentage: 10,
        rating: 4.85,
        stock: 50,
        brand: "Apple",
        category: "laptops",
        thumbnail: "path/to/thumbnail3.jpg",
        images: ["path/to/image3_1.jpg", "path/to/image3_2.jpg", "path/to/image3_3.jpg"],
      },
      {
        id: 4,
        title: "Sony WH-1000XM4",
        description: "Premium noise-canceling headphones from Sony",
        price: 349,
        discountPercentage: 15,
        rating: 4.9,
        stock: 75,
        brand: "Sony",
        category: "audio",
        thumbnail: "path/to/thumbnail4.jpg",
        images: ["path/to/image4_1.jpg", "path/to/image4_2.jpg", "path/to/image4_3.jpg"],
      },
    ];//get data from the service
  }

}
