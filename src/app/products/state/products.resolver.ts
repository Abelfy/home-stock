import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { AppState } from "src/app/reducers";
import { loadAllProducts } from "./products.actions";

@Injectable()
export class ProductResolver implements Resolve<any> {

    loading = false;

    resolve( route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<any> {
        return this._store.pipe(
            tap(() => {

                if (!this.loading) {
                    this.loading = true;
                    this._store.dispatch(loadAllProducts());
                }
            }),
            first(),
            finalize(() => this.loading = false)
        )
    }
    
    
    constructor(private _store: Store<AppState>) {}

}