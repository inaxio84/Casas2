import { Component, OnInit } from '@angular/core';
import { CasaService } from '../providers/casa.service';
import { Casa } from '../model/casa';
import { Servicios } from '../model/servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  casas: Casa[];
  nuevaCasa_nombre: string;
  nuevaCasa_precio: number;
  nuevaCasa_alquiler: boolean;
  nuevaCasa_habitaciones: number;
  nuevaCasa_foto: string;
  nuevaCasa_direccion: string;
  nuevaCasa_servicios: Servicios[];



  constructor(public casaService: CasaService) {
    console.log("FormularioComponent constructor");
    this.casas = [];
  }

  ngOnInit() {
    console.log("FormularioComponent ngOnInit");

  }


  addCasa() {

    let nuevaCasa = new Casa();
    nuevaCasa.alquiler = this.nuevaCasa_alquiler;

    console.log('añadir tarea');
/*
    this.casaService.post(nuevaCasa).subscribe(
      result => {
        console.log('formularioComponent new %o', result);
        this.cargarCasas();
      },
      error => {
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );
    */
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
  }

}
