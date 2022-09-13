import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola-mundo';
  descripcion = "esto-es-una-prueba";
  variable = "esto es una variable string que es algo más larga ahora";
  edad = 23;


  cambiarEdad(){
    this.edad++;
  }
}
