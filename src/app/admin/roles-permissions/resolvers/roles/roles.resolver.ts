import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { Role } from '../../store/models/role.model';
import { RolesActions, RolesSelectors } from '../../store/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesResolver implements Resolve<Role[]> {
  private loading = false;

  constructor(private store : Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
    return this.store.select(RolesSelectors.selectAllRoles).pipe(
      tap(roles => {
        if (roles.length === 0 && this.loading === false) {
          this.loading = true;
          this.store.dispatch(RolesActions.loadAllRoles());
        }
      }),
      filter(roles => roles.length > 0),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
