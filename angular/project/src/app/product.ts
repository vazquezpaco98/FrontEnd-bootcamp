export class Product {
    imagen = "imagen";

    nombre = "nombre";

    precio = 89;

    descripcion = "descripcion";

    constructor(nom: string, prec: number, des: string) {
        this.nombre = nom;
        this.precio = prec;
        this.descripcion = des;
    }
}
