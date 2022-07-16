import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from 'src/app/state/models/user.model';
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
      .post<any>(`${environment.api}/auth/login`, {
        email,
        password,
      })
      .pipe(map((envelope) => envelope.data));
  }

  refresh(): Observable<any> {
    return this.http
      .post<any>(`${environment.api}/auth/refresh`, {
        refresh_token: localStorage.getItem('refresh_token'),
      })
      .pipe(map((envelope) => envelope.data));
  }

  logout(): Observable<any> {
    return this.http
      .post(`${environment.api}/auth/logout`, {
        refresh_token: localStorage.getItem('refresh_token'),
      })
      .pipe(
        tap((response) => {
          localStorage.clear();
        })
      );
  }

  me(): Observable<User> {
    return this.http
      .get<User>(`${environment.api}/users/me?fields=*,role.name,role.id`)
      .pipe(map((envelopp: any) => envelopp.data));
  }
}
