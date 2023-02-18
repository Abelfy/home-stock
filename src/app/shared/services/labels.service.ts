import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Label } from 'src/app/store/models/label.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelsService {

  constructor(private http : HttpClient) { }

  getAllLabels() : Observable<Array<Label>> {
    return this.http
    .get<Array<Label>>(`${environment.api}/items/etiquette`)
    .pipe(
      map((envelope: any) => envelope.data || [])
    );
  }
}
