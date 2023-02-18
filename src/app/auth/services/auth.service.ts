import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<boolean> {
    return this.http.post<any>(`${environment.api}/users`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${environment.api}/auth/local/signin`, {
        email,
        password,
      });
  }

  refresh(): Observable<any> {
    return this.http
      .post<any>(`${environment.api}/auth/refresh`, {}).pipe(tap((response) => {
        localStorage.setItem('access_token',response.access_token);
        localStorage.setItem('refresh_token',response.refresh_token);
      }));
  }

  logout(): Observable<any> {
    return this.http
      .post(`${environment.api}/auth/logout`, {
        id : JSON.parse(localStorage.getItem('user')).id,
      })
      .pipe(
        tap((response) => {
          localStorage.clear();
        })
      );
  }

  me(): Observable<User> {
    return this.http
      .get<User>(`${environment.api}/auth/me`)
  }
}
