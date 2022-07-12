import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { homestock } from '../../types';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<homestock.User>;
  public currentUser: Observable<homestock.User>;
  public isLoggedIn$: Observable<boolean>;
  public isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<homestock.User>(JSON.parse(localStorage.getItem('UserData')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.isLoggedIn$ = this.currentUser.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((isLoggedIn) => !isLoggedIn));
  }

  public get currentUserValue(): homestock.User {
    return this.currentUserSubject.value;
  }

  public set currentUserValue(user: homestock.User) {
    localStorage.setItem('UserData',JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  register(user: homestock.User): Observable<boolean> {
    return this.http.post<any>(`${environment.api}/users`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.api}/auth/login`, {
      email,
      password,
    });
  }

  refresh() : Observable<any> {
    return this.http.post(`${environment.api}/auth/refresh`,{refresh_token : localStorage.getItem('refresh_token')})
  }

  logout() : Observable<any> {
    return this.http.post(`${environment.api}/auth/logout`,{refresh_token : localStorage.getItem('refresh_token')}).pipe(tap(response => {
      localStorage.clear();

    }))
  }
  
  me(): Observable<homestock.User>{
    return this.http.get<homestock.User>(`${environment.api}/users/me?fields=*`).pipe(tap((envelopp : any)  => {
      this.currentUserValue = envelopp.data;
    }));
  }
}
