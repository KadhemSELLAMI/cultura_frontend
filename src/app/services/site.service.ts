import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  constructor(private http: HttpClient) { }

  getSites(): Observable<any> {
    return this.http.get('http://localhost:8080/api/sites');
  }

  getSiteById(id: number): Observable<any> {
    const url = `http://localhost:8080/api/sites/${id}`;
    return this.http.get(url);
  }
}
