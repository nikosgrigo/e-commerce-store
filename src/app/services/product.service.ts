import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://dummyjson.com';

    //Subject to hold product list
    private _productsSub = new BehaviorSubject<Product[]>([])
    public readonly product$ = this._productsSub.asObservable()

  constructor(private http:HttpClient) {}

  getAllProducts(): void {

    // Make the HTTP GET request with options
    this.http.get<any>(`${this.url}/products`).subscribe(data => {
      this._productsSub.next(data?.products);
      console.log(data)
    });
  }



}
