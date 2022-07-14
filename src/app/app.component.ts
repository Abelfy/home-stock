import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { selectProductInCartCount } from './state/products/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home Stock';
  productInCart$ = this.store.select(selectProductInCartCount);

  constructor(
    private router: Router,
    public authSrv: AuthService,
    private store : Store) {
    this.router.onSameUrlNavigation = 'reload';
  }

  logout() {
    this.authSrv
      .logout()
      .pipe(
        tap(() => {
          location.reload()
        })
      )
      .subscribe();
  }
}
