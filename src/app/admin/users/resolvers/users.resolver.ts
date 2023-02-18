import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, finalize, first, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { UsersActions, UsersSelectors } from '../store';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

  private loading = false;

  constructor(private store : Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.store.select(UsersSelectors.selectAllUsers).pipe(
      tap(users => {
        if (users.length === 0) {
          this.loading = true;
          this.store.dispatch(UsersActions.loadAllUsers());
        }
      }),
      filter(users => users.length > 0),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
