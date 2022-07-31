import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http: HttpClient) { }

  getAllUnits() : Observable<any> {
    return this.http
    .get(`${environment.api}/items/units`)
    .pipe(map((envelope: any) => envelope.data || []));
  }
}
