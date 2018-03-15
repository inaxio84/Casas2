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

  delete(id) {
    let url = END_POINT + '/casas'; + id;
    console.log(`CasaService delete ${url}`);
    return this.http.delete(url);
  }
/*
  post(casa: Casa) {
    let url = END_POINT + '/todos/';
    console.log(`CasaService put ${url}`);

    let body = {
      // "id": todo.id,
      "userId": todo.idUser,
      "title": todo.title,
      "completed": todo.completed
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, body, httpOptions);
  }

  patch(todo: Todo) {
    let url = GLOBAL.endpoint + '/todos/'+todo.id;
    console.log(`TodosService patch ${url}`);
    todo.completed=!todo.completed;
    let body = {
      "completed": todo.completed
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(url, body, httpOptions);
  }
*/
}
