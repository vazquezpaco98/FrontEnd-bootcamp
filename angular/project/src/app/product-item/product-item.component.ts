import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductService]
})
export class ProductItemComponent implements OnInit {

  @Input() product;

  constructor(productService: ProductService) { this.product = productService.getProduct();}

  ngOnInit(): void {
  }

 
}
