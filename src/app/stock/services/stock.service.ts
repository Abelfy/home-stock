import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) { }
  
  getStocks(): Observable<any> {
    return this.http.get(`${environment.api}/items/stock?fields=*.*,products.products_id.*,products.unit.*,products.user_created.*,products.products_id.etiquette.*`).pipe(map((envelopp: any) => envelopp.data));
  }
}
