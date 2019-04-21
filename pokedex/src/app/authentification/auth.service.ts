import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://51.75.122.159:3000/auth/login';

  constructor(private http: HttpClient) { }
  connexion(user: User): Observable<User> {
    return this.http.post<User>(this.authUrl, user);
  }
}
