import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'project';

  products: Array<Product>;

  constructor(productService: ProductService){this.products = productService.getProducts();} 
}

//this.products = productService.getProducts();
