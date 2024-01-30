import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoadSpinnerComponent } from './shared/load-spinner/load-spinner.component';

import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe,NavbarComponent, FooterComponent, LoadSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Fly cart | Shop ...';

  constructor(private productService:ProductService){}

  isLoading$:Observable<boolean> = this.productService.isLoading$;

}
