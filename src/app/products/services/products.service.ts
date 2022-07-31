import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/state/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts() : Observable<Array<Product>> {
    return this.http
    .get(`${environment.api}/items/products?fields=*,etiquette.*`)
    .pipe(map((envelope: any) => envelope.data || []));
  }

  createProduct(product: any) : Observable<Product> {
    return this.http.post(`${environment.api}/items/products`, product)
    .pipe(map((envelope: any) => envelope.data));
  }

  updateProduct(product: any) : Observable<Product> {
    console.log(product)
    return this.http.patch<Product>(`${environment.api}/items/products/${product.id}`, product)
    .pipe(map((envelope: any) => envelope.data));
  }
}
