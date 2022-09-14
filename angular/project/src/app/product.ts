export class Product {
    imagen = 'https://picsum.photos/300/300';

    nombre = "nombre";

    precio = 89;

    descripcion = "descripcion";

    constructor(nom: string, prec: number, des: string) {
        this.nombre = nom;
        this.precio = prec;
        this.descripcion = des;
    }
}
