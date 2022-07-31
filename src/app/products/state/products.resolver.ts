import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, finalize, first, Observable, tap } from "rxjs";
import { AppState } from "src/app/reducers";
import { ProductSelectors } from "./actions-types";
import { loadAllProducts } from "./products.actions";

@Injectable()
export class ProductResolver implements Resolve<any> {

    loading = false;

    resolve( route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<any> {
        return this._store.pipe(
            select(ProductSelectors.areProductsLoaded),
            tap((productsLoaded) => {

                if (!this.loading && !productsLoaded) {
                    this.loading = true;
                    this._store.dispatch(loadAllProducts());
                }
            }),
            filter((productsLoaded) => productsLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
    
    
    constructor(private _store: Store<AppState>) {}

}