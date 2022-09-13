import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  foto = "Foto";

  nombre = "Nombre";

  precio = 24.99;

  descripcion = "Esto es una descripcion que va a ser un pelin mas larga a ver que es lo que nos hace";


}
