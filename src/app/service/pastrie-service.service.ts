import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pastrie } from '../model/pastrie';
import { Observable } from 'rxjs';

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
    // this.pastriesUrl = 'http://127.0.0.1:8080/pastries';
    this.pastriesUrl = 'https://boulangerie-back.herokuapp.com/pastries';
  }

  public getAllPastries(){
    return this.http.get<Pastrie[]>(this.pastriesUrl);
  }

  public getPastrieById(id: number){
    const url = `${this.pastriesUrl}/${id}`;
    return this.http.get<Pastrie>(url);
  }

  public removePastrieById(id: number){
    const url = `${this.pastriesUrl}/${id}`;
    return this.http.delete(url);
  }

  public insertPastrieToDB(pastrie: Pastrie){
    return this.http.post<Pastrie>(this.pastriesUrl, pastrie);
  }

  public updatePastrie(pastrie: Pastrie){
    return this.http.put<Pastrie>(this.pastriesUrl, pastrie);
  }

  

}
