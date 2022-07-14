import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { ProductsService } from './products/services/products.service';
import { AuthService } from './shared/services/auth.service';
import { selectProductInCartCount } from './state/products/products.selectors';
import { retrieveUnits } from './state/units/units.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Home Stock';
  productInCart$ = this.store.select(selectProductInCartCount);

  constructor(
    private router: Router,
    public authSrv: AuthService,
    private _productsService : ProductsService,
    private store : Store) {
    this.router.onSameUrlNavigation = 'reload';
  }
  ngOnInit(): void {
    this._productsService.getUnits().subscribe(units => this.store.dispatch(retrieveUnits({ units })));
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
