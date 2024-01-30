import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, catchError, finalize, map } from 'rxjs';
import { Product } from '../interfaces/product';

import { tap } from 'rxjs';
import { ProductAPIResponse } from '../interfaces/product-apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://dummyjson.com';

  //Subject to hold product list
  private _productsSub = new BehaviorSubject<Product[]>([])
  public readonly product$ = this._productsSub.asObservable()

  constructor(private http: HttpClient) { }

  getAllProducts(limit?: number, skip?: number): Observable<Product[]> {

    let request:string = `${this.url}/products`;

    if(limit){
      request = `${this.url}/products?limit=${limit}&skip=${skip}`;
    }

    // Make the HTTP GET request with options
    return this.http.get<ProductAPIResponse>(request, {
      observe: 'response',
      transferCache: { includeHeaders: ['X-Total-Count'] }
    }).pipe(
      catchError((error: any) => {
        console.error('Error fetching products:', error);
        return [];
      }),
      map((response: HttpResponse<ProductAPIResponse>) => {
        console.log(`Fetching products...`);

        // Access headers to get Total number of products
        const totalCountHeader = response.headers.get('X-Total-Count');
        console.log(`Total products: ${totalCountHeader}`);

        // Return the products array
        return response.body?.products || [];
      }),
      tap((products: Product[]) => {
        this._productsSub.next(products);
      })
    );
  }

  getProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${productId}`);
  }



}
