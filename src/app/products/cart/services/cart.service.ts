import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

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
