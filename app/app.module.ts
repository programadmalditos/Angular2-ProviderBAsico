import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { FormularioProductoComponent } from './Component/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from './Component/listado-productos/listado-productos.component';
import { ListaComraFileService } from './Services/listaCompraFile-service/listaCompraFile-service';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormularioProductoComponent, ListadoProductosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ListaComraFileService ]
})
export class AppModule { }
