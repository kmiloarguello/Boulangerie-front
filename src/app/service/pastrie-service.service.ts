import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pastrie } from '../model/pastrie';
import { Observable } from 'rxjs';
// import {  Response, Headers , RequestOptions} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { map } from 'rxjs/operators';
*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PastrieService {

  private pastriesUrl : string;

  constructor(private http: HttpClient) { 
    this.pastriesUrl = 'http://127.0.0.1:8080/pastries';
  }

  public getAllPastries(){
    return this.http.get<Pastrie[]>(this.pastriesUrl);
  }

  public getPastrieById(id: number){
    const url = `${this.pastriesUrl}/${id}`;
    console.log({url});
    return this.http.get<Pastrie>(url);
  }

  public insertPastrieToDB(pastrie: Pastrie){
    return this.http.post<Pastrie>(this.pastriesUrl, pastrie);
  }

  

}
