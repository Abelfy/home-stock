import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { ProductsService } from './products/services/products.service';
import { AuthService } from './shared/services/auth.service';
import { AppState } from './state/app.state';
import { AuthActions, AuthSelectors } from './auth/state/action-types';
import { retrieveLabels } from './state/labels/labels.actions';
import { selectProductInCartCount } from './products/state/products.selectors';
import { retrieveUnits } from './state/units/units.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Home Stock';
  productInCart$ = this._store.select(selectProductInCartCount);

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
    this.isLoggedIn$ = this._store.select(AuthSelectors.isLoggedIn)
    this.isLoggedOut$ = this._store.select(AuthSelectors.isLoggedOut)
  }

  logout() {
    this._store.dispatch(AuthActions.LogOut());
  }
}
