import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import { AppState } from '../state/app.state';
import { AuthSelectors } from './state/action-types';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private store: Store<AppState>,
        private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.store
            .pipe(
                select(AuthSelectors.isLoggedIn),
                tap(loggedIn => {
                    if (!loggedIn) {
                        this.router.navigateByUrl('/login');
                    }
                })
            )


    }

}
