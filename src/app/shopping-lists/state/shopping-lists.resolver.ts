import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, finalize, first, Observable, tap } from "rxjs";
import { AppState } from "src/app/reducers";
import { ShoppingListsActions, ShoppingListsSelectors } from "./action-types";

@Injectable()
export class ShoppingListsResolver implements Resolve<any> {
    loading = false;

    resolve( route : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<any> {
        return this._store.pipe(
            select(ShoppingListsSelectors.areAllShoppingListsLoaded),
            tap((shoppingListsLoaded) => {
                if (!this.loading && !shoppingListsLoaded) {
                    this.loading = true;
                    this._store.dispatch(ShoppingListsActions.loadAllShoppingLists());
                }
            }),
            filter((shoppingListsLoaded) => shoppingListsLoaded),
            first(),
            finalize(() => this.loading = false)
        )
    }
    
    
    constructor(private _store: Store<AppState>) {}
}