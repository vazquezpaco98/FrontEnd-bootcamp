import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Array<Product>;

  constructor(productService: ProductService){this.products = productService.getProducts();} 

  ngOnInit(): void {
  }

}
