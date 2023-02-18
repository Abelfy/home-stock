import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permission } from '../store/models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http : HttpClient) { }

  getAllPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${environment.api}/permissions`);
  }
}
