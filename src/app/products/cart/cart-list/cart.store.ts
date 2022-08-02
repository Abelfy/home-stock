import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ToastrService } from 'ngx-toastr';
import { finalize, map, Observable, switchMap, tap } from 'rxjs';
import { ShoppingList } from 'src/app/shopping-lists/state/shopping-list';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { CartService } from '../services/cart.service';

export interface CartState extends ShoppingList {
  isLoading: boolean;
  errorMessage: string;
}

const initialState: CartState = {
    id: null,
    status: null,
    date_created: new Date(),
    user_created: null,
    product: [],
    isLoading: true,
    errorMessage: null,
  }

@Injectable()
export class CartStore extends ComponentStore<CartState> {
  constructor(private readonly _cartService: CartService,private readonly _toastr: ToastrService) {
    super(initialState);
    this.state$.subscribe((state) => console.log(state));
  }

  init() {
    this.fetchCurrentList();
  }

  readonly isLoading$: Observable<boolean> = this.select(
    (state) => state.isLoading
  );
  readonly shoppingList$: Observable<CartState> = this.select((state) => state);

  readonly addProductToCart$: Observable<ProductInList> = this.updater(
    (state, product: ProductInList) => {
      return {
        ...state,
        products: [...state.product, product],
      };
    }
  );

  readonly fetchCurrentList = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      switchMap(() =>
        this._cartService.getCurrentList().pipe(
          tapResponse(
            (shoppingList: ShoppingList) => {
              this.patchState({ ...shoppingList });
            },
            (error: HttpErrorResponse) =>
              this.patchState({ errorMessage: error.message })
          ),
          finalize(() => {
            this.patchState({ isLoading: false });
          })
        )
      )
    );
  });

  readonly createList = this.effect(
    (products$: Observable<ProductInList[]>) => {
      return products$.pipe(
        tap((products) => this.patchState({ isLoading: true })),
        tap((products) => console.log(products)),
        switchMap((products: ProductInList[]) =>
          this._cartService.createShoppingList(products).pipe(
            tapResponse(
              (shoppingList: ShoppingList) =>
                this.patchState({ ...shoppingList }),
              (error) =>
                this.patchState({
                  errorMessage:
                    error instanceof HttpErrorResponse
                      ? error.message
                      : 'Une erreur est survenue',
                })
            ),
            finalize(() => this.patchState({ isLoading: false }))
          )
        )
      );
    }
  );

  readonly saveList = this.effect((shoppingList$: Observable<ShoppingList>) => {
    return shoppingList$.pipe(
      tap((shoppingList) => this.patchState({ isLoading: true })),
      tap((shoppingList) => console.log(shoppingList)),
      map((shoppingList) => ({ ...shoppingList, status: 'published' })),
      switchMap((shoppingList: ShoppingList) =>
        this._cartService.patchShoppingList(shoppingList).pipe(
          tapResponse(
            (shoppingList: ShoppingList) =>{
                this._toastr.success('La liste a été sauvegardée');
                this.patchState({ ...shoppingList });
            },
            (error) =>
              this.patchState({
                errorMessage:
                  error instanceof HttpErrorResponse
                    ? error.message
                    : 'Une erreur est survenue',
              })
          ),
          finalize(() => this.setState({...initialState, isLoading : false}))
        )
      )
    );
  });
}
