import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productList: Product[] = [];

  private _cartSubject = new BehaviorSubject<Product[]>(this.productList);
  public readonly cart$ = this._cartSubject.asObservable();


  //Add a product to the cart
  addProduct(product: Product): void {
    const existingProduct = this.productList.find(p => p.id === product.id);

    if (existingProduct) {
      // Product is already in the cart, update its quantity
      existingProduct.quantity = (existingProduct.quantity ?? 0) + (product.quantity ?? 1);
    } else {
      // Product is not in the cart, add it
      this.productList.push(product);
    }


    this._cartSubject.next([...this.productList]); // Notify subscribers

  }

  //Remove a product from the cart
  removeProduct(productId: number): void {
    this.productList = this.productList.filter(product => product.id !== productId);
    this._cartSubject.next([...this.productList]); // Notify subscribers
  }

  //Empty cart
  clearCart(): void {
    this.productList = [];
    this._cartSubject.next([...this.productList]); // Notify subscribers
  }


  //Get all products to use them on checkout
  getallProducts(): Product[] {
    return this.productList;
  }


  //Calculate total cost for the cart based on the products
  getTotalCost(): number {
    return this.productList.reduce(function (sum, product) { return sum + product.price; }, 0);
  }

}
