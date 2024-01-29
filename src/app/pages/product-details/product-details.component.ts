import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, RouterOutlet ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent {

  productID!: number; //Getting Product id from URL
  product!: Product; //Getting Product details

  quantity: number = 1;

  productImages!: string[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cartService:CartService
    ) { }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID:number) {
    this.productService.getProductDetails(productID).subscribe(product =>{
      console.log(product);
      this.product = product;
      this.productImages = product.images;
    });
  }

  addProductToCart(){
    
    const newProduct = { ...this.product, quantity: this.quantity };
    this.cartService.addProduct(newProduct);
    //add to cart object 
    //calculate total
    //change icon 
    //etc
  }

    // Increase the quantity
    increaseQuantity(): void {
      this.quantity++;
    }
  
    // Decrease the quantity
    decreaseQuantity(): void {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }



}
