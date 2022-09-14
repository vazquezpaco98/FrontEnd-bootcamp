import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductService {
    getProduct(): Product {
      return new Product("Nombre", 87, "LA descripcion");
    }

    getProducts(): Array<Product>{
        var array = new Array(3);
        array[0] = new Product("Producto", 81, "Esto es la descripcion del servicio");
        array[1] = new Product("Cámara", 82, "Esto es la descripcion del servicio");
        array[2] = null;
        return array;
    }
}
