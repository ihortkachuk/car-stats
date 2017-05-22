import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../shared/consts';
import { Car } from '../shared/car.model';


@Injectable()
export class CarsService {
  constructor(private http: Http) {  }

  get(): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.get(`${API}/car?token=${token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  getCar(id: number): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.get(`${API}/car/${id}?token=${token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  add(data: Car): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.post(`${API}/car?token=${token}`, data)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  edit(id: number, data: Car): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.put(`${API}/car/${id}?token=${token}`, data)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  delete(id: number): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.delete(`${API}/car/${id}?token=${token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
