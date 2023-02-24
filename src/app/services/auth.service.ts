import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envionment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = envionment.baseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.url + '/auth/login', {
      email,
      password,
    });
  }

  autoLogin(): any {
    let token = '';
    const tokenJson = localStorage.getItem('token');

    if (tokenJson) {
      token = tokenJson;
      return token;
    }

    return null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
