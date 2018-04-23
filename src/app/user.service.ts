import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  create(user) {
    return this.http.post('http://localhost:3000/logup', { user : user }, this.httpOptions);
  }
  login(user) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.http.post('http://localhost:3000/login', { user : user }, this.httpOptions);
  }

  isLoggedIn() {
    // const token = this.getToken();
    // if (token) { return true; }
    // return false;
    return tokenNotExpired();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserCurrent() {
    let token = this.getToken();
    if (!token) return null;
    let jwtHelper = new JwtHelper();
    return jwtHelper.decodeToken(token);
  }


}
