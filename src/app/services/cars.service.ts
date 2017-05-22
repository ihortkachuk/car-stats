import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../shared/consts';
import { Car } from '../shared/car.model';


@Injectable()
export class CarsService {
  token: string = localStorage.getItem('auth_token');

  constructor(private http: Http) {  }

  get(): Promise<any> {
    return this.http.get(`${API}/car?token=${this.token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  add(data: Car): Promise<any> {
    return this.http.post(`${API}/car?token=${this.token}`, data)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  delete(id: number): Promise<any> {
    return this.http.delete(`${API}/car/${id}?token=${this.token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
