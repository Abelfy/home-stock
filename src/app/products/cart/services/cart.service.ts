import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductInList } from 'src/app/state/models/product-in-cart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  createShoppingList(shoppingList: ProductInList[]) {
    return this.http.post<any>(`${environment.api}/items/shopping_list`, shoppingList).pipe(map((envelope: any) => envelope.data));
  }
}
