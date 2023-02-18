import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { Permission } from '../../store/models/permission.model';
import { PermissionsActions, PermissionsSelectors } from '../../store/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsResolver implements Resolve<Permission[]> {
  private loading = false;

  constructor(private store : Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Permission[]> {
    return this.store.select(PermissionsSelectors.selectAllPermissions).pipe(
      tap(permissions => {
        if (permissions.length === 0 && this.loading === false) {
          this.loading = true;
          this.store.dispatch(PermissionsActions.loadAllPermissions());
        }
      }),
      filter(permissions => permissions.length > 0),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
