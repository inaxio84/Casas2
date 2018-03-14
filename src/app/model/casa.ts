import { Servicios } from "./servicio";

/*Clase para encapsular los atributos de una casa*/

export class Casa{

    nombre:string;
    precio:number;
    alquiler:boolean;
    habitaciones:number;
    foto:string;
    direccion:string;
    servicios: Servicios[];


    constructor(){
        console.log('Casa constructor');

    }


}