import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 product: Product = new Product("hola", 89, "esto es una descripcion");

  constructor() { }

  ngOnInit(): void {
  }

 
}
