import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: any) {
    return Observable.throw(error);
  }

  get(url: string, httpParams: HttpParams = new HttpParams()): Observable<any> {

    return this.http.get(`${environment.apiUrl}${url}`, { params: httpParams })
      .pipe(catchError(this.handleError));
  }
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.handleError));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiUrl}${path}`
    ).pipe(catchError(this.handleError));
  }

}
