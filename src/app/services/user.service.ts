import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private server = "https://general--backend.herokuapp.com/"; // https://general--backend.herokuapp.com/ or http://localhost:5003/ 

  constructor(private _http:HttpClient) { }

  
  register(body: any) {
    return this._http.post( this.server + 'users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body:any) {
    return this._http.post(this.server + 'users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  user() {
    return this._http.get(this.server  + 'users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });  
  }

  logout() {
    return this._http.get(this.server + 'users/logout', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });  
  }

  


}
