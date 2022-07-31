import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  constructor(private http : HttpClient) { }

  getShoppingLists(){
    return this.http.get(`${environment.api}/items/shopping_list?fields=*,product.*,product.products_id.*,product.unit.*`)
      .pipe(map((envelope : any) => envelope.data));
  }
}
