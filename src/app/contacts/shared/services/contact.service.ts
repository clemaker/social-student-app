import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../core/models/user.model.interface';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  index(): Observable<User[]> {
    return this.http.get<User[]>(environment.contact.dashboard);
  }

  delete(id: number): Observable<User> {
    return this.http.post<User>(environment.contact.delete, { id });
  }

  invite(id: number): Observable<User> {
    return this.http.post<User>(environment.contact.invite, { id });
  }
}
