import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';
import { ListaComraFileService } from '../../Services/listaCompraFile-service/listaCompraFile-service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  productos: Array<Producto> = [];

  constructor(private servicio: ListaComraFileService) {

  }

  ngOnInit() {
    this.servicio.getProductos().then(data => {
      this.productos = data;
    });
  }

  guardar(model: Producto) {
    let v = Math.max.apply(Math, this.productos.map(function (o) { return o.id; }));
    model.id = ++v;
    this.productos.push(model);

  }

}
