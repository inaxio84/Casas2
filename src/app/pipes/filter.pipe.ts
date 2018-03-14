import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({
    name: 'filterCasa'
})
export class FilterCasa implements PipeTransform {

    /**
     * Filtro para buscar en una coleccion de casaa. No es CaseSensitive
     * @param casas : Casa[]
     * @param searchText : string con el nombre o direccion de la casa
     */
    transform(casas: Casa[], searchText: string, isAlquiler: boolean, isVenta: boolean, precioMin: number, precioMax: number): Casa[] {

        //si no hay casas retornar vacío
        if (!casas) { return []; }

        let casasFilterArray: Casa[] = [];

        //Filtramos si es alquiler o no
        if (isAlquiler && !isVenta) {
            casas.forEach(it => {
                if (it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        }
        //Filtramos si es venta o no
        else if (!isAlquiler && isVenta) {
            casas.forEach(it => {
                if (!it.alquiler) {
                    casasFilterArray.push(it);
                }
            });
        }
        else {
            casasFilterArray = casas;
        }

        //filtramos por precio minimo
        if (precioMin != undefined) {
            casasFilterArray=casasFilterArray.filter(it => {
                return it.precio>precioMin;
            });
        }
        //filtramos por precio maximo
        if (precioMax != undefined) {
            casasFilterArray=casasFilterArray.filter(it => {
                return it.precio<precioMax;
            });
        }

        //Filtramos por nombre o direccion
        if (!searchText) {
            return casasFilterArray;
        } else {
            searchText = searchText.toLowerCase();
            let casa = '';
            return casasFilterArray.filter(it => {
                casa = it.nombre + it.direccion;
                casa = casa.toLowerCase();
                return casa.includes(searchText);
            });
        }


    }

}