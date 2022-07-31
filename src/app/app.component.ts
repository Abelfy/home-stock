import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { AuthActions, AuthSelectors } from './auth/state/action-types';
import { AuthService } from './auth/services/auth.service';
//unt } from './products/state/products/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Home Stock';
  loading = true;

  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$ : Observable<boolean>;
  user$ = this._store.select(AuthSelectors.user);	


  constructor(
    private router: Router,
    public authSrv: AuthService,
    private _store : Store<AppState>) {
    this.router.onSameUrlNavigation = 'reload';
  }
  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');
    if(userProfile) {
      this._store.dispatch(AuthActions.LogInSuccess({ user: JSON.parse(userProfile) }));
    }
    
    this.router.events.subscribe(event => {
      switch(true){
        case event instanceof NavigationStart:{
          this.loading = true;
          break;
        }
        case event  instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError : {
          this.loading = false;
          break
        }
        default: {
          break;
        }
      }
    })
    this.isLoggedIn$ = this._store.select(AuthSelectors.isLoggedIn)
    this.isLoggedOut$ = this._store.select(AuthSelectors.isLoggedOut)
  }

  logout() {
    this._store.dispatch(AuthActions.LogOut());
  }
}
