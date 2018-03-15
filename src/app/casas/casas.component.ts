import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';
import { CasaService } from '../providers/casa.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

  casas : Casa[]; //Array<Receta>
  casaSelec : Casa;
  alquilerFilter : boolean;
  ventaFilter : boolean;
  precioMin:number;
  precioMax:number;

  constructor(public casaService: CasaService) {
    console.log('CasasComponent constructor');
    this.casas = [];
  }

  ngOnInit() {
    console.log('CasasComponent ngOnInit');
    this.cargarCasas();
    this.casaSelec = this.casas[0] || new Casa();
    this.alquilerFilter=true;
    this.ventaFilter=true;


    
  }

  seleccionarCasa( casa : Casa ){
    console.log('CasasComponent seleccionarcasa');
    this.casaSelec = casa;
  }

  /**
   * mapea los datos en formato json a todo que proviene del servicio rest
   * @param resultado 
   */
  mapeo(result: any) {

    let casa: Casa;
    result.forEach(el => {
      casa = new Casa();
      casa.nombre = el.nombre;
      casa.precio = el.precio;
      casa.alquiler = el.alquiler;
      casa.habitaciones = el.habitaciones;
      casa.foto = el.foto;
      casa.direccion = el.direccion;
      casa.servicios = el.servicios;
      this.casas.push(casa);
    }
    );
    this.casaSelec=this.casas[0];
  }

  cargarCasas() {
    console.log('CasasComponent cargarCasas');
    this.casas = [];
    this.casaService.getCasas().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

}
