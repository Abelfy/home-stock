import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShoppingList } from 'src/app/shopping-lists/state/shopping-list';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCurrentList() : Observable<ShoppingList>{
    let params : HttpParams = new HttpParams()
    .append('fields', '*,product.*,product.products_id.*,product.unit.*')
    .append('filter', JSON.stringify({status : { _eq : 'draft'}}));
    return this.http.get<any>(`${environment.api}/items/shopping_list`, { params }).pipe(
      map((envelope: any) => envelope.data[0])
    );
  }

  patchShoppingList(shoppingList: ShoppingList) {
    return this.http
      .patch<any>(`${environment.api}/items/shopping_list/${shoppingList.id}`, shoppingList)
      .pipe(map((envelope: any) => envelope.data));
  }

  createShoppingList(shoppingList: ProductInList[]) {
    let products = [];

    shoppingList.map((productInList: ProductInList) => {
      let products_id = productInList.product.id;
      products.push({
        products_id,
        quantity: productInList.quantity,
        unit: productInList.unit,
      });
    });
    return this.http
      .post<any>(`${environment.api}/items/shopping_list`, {
        product: products,
      })
      .pipe(map((envelope: any) => envelope.data));
  }
}
