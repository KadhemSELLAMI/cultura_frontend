import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService
  ) {}

  getSites(): Observable<any> {
    return this._http.get(`${environment.apiUrl}/sites`);
  }

  getSiteById(id: number): Observable<any> {
    const url = `${environment.apiUrl}/sites/${id}`;
    return this._http.get(url);
  }

  writeBlog(data: any) {
    return this._http.post(`${environment.apiUrl}/sites`, data)
    .pipe(
      catchError(err => this._errorService.handleError(err))
    );
  }
}
