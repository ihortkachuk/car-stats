import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../shared/consts';
import { Notes } from '../shared/notes.model';

@Injectable()
export class NotesService {
  constructor(private http: Http) {  }

  get(): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.get(`${API}/notes?token=${token}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  add(id: number, data: any): Promise<any> {
    const token = localStorage.getItem('auth_token');
    return this.http.post(`${API}/notes/${id}?token=${token}`, data)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
