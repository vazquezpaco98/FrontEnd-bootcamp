import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(productService: ProductService, router: ActivatedRoute) { 
    this.product = productService.getProduct();
    console.log(router.snapshot.paramMap.get("indice"))
  }

  ngOnInit(): void {
  }

  

 
}
