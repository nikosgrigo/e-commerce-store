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

  //Subject for saving total data length from the server
  private _totalSub = new BehaviorSubject<number>(10);
  public readonly totalResults$ = this._totalSub.asObservable()

  //Subject for loading spinner actions
  private _loading = new BehaviorSubject<boolean>(true);
  public readonly isLoading$ = this._loading.asObservable()


  constructor(private http: HttpClient) {}


  getAllProducts(limit?: number, skip?: number): Observable<Product[]> {

    this._loading.next(true)

    let request: string = `${this.url}/products`;

    if (limit) {
      request = `${this.url}/products?limit=${limit}&skip=${skip}`;
    }

    // Make the HTTP GET request with options
    return this.http.get<ProductAPIResponse>(request, {
      observe: 'response',
    }).pipe(
      catchError((error: any) => {
        console.error('Error fetching products:', error);
        return [];
      }),
      map((response: HttpResponse<ProductAPIResponse>) => {
        console.log(`Fetching products...`);

        // Access headers to get Total number of products
        const totalCountHeader = response.body?.total || 0;

        console.log(`Total products: ${totalCountHeader}`);

        this._totalSub.next(totalCountHeader);

        // Return the products array
        return response.body?.products || [];
      }),
      tap((products: Product[]) => {
        this._productsSub.next(products);
        this._loading.next(false);

        console.log(this._loading)
      })
    );
  }

  getProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${productId}`);
  }



}
