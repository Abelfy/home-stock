import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(filename: string,file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    
    formData.append('title',filename);
    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.api}/files`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.api}}/files`);
  }
}
