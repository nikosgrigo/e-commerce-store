import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.sass'
})
export class ProductDetailsComponent {

  productID!: number; //Getting Product id from URL
  productData!: Product; //Getting Product details
  productImages!: string[];

  constructor(
    private productService: ProductService,
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID:number) {
    this.productService.getProductDetails(productID).subscribe(product =>{
      console.log(product);
      this.productData = product;
      this.productImages = product.images;
    });
  }



}
