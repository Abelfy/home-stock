import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts() : Observable<any> {
    return this.http.get(`${environment.api}/items/products`).pipe(map((envelopp: any) => envelopp.data));
  }
}
