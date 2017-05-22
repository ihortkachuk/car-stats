import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { API } from '../shared/consts';

@Injectable()
export class AuthService {
  private loggedIn: boolean = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(username: string, password: string): Promise<any> {
    return this.http.post(`${API}/get_token`, { user_name: username, password })
      .toPromise()
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('auth_token', res.token);
          this.loggedIn = true;
        }
      })
      .catch(this.handleError);
  }

  signup(username: string, password: string): Promise<any> {
    return this.http.post(`${API}/user`, { user_name: username, password })
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleError);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
