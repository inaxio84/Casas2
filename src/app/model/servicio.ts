/*Clase para encapsular los atributos de los servicios de una casa*/

export class Servicios{

    nombre:string;
    disponible:boolean;


    constructor(){
        console.log('Servicios constructor');

        this.nombre="tv";
        this.disponible=true;

    }


}