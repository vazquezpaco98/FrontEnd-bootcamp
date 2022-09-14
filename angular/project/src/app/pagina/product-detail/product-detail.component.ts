import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  product: Product = new Product("hola", 88, "Y la descripcion del detallado");


  constructor() { }

  ngOnInit(): void {
  }

}
