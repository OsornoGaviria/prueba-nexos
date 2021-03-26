import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBDService {

  constructor(private http: HttpClient) { }

  apiUrl= 'http://ideapp.xyz/Nexos/';


  Login(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  verClientes(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  

}
