import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Casa } from '../model/casa';

const END_POINT = "http://localhost:3000";
@Injectable()
export class CasaService {


  constructor(public http: HttpClient) {
    console.log('TodosService constructor');
  }

  getCasas(): Observable<any> {
    let url = END_POINT + '/casas';
    console.log(`CasaService getCasas ${url}`);

    return this.http.get(url);
  }

}
