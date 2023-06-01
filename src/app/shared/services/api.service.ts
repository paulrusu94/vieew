/* 'Barrel' of Angular Core */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';

/* 'Barrel' of internal services */
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { ObservableInput } from 'rxjs/internal/types';

import { SessionService } from './session.service';
import { NotificationService } from './notification.service';

@Injectable()

export class ApiService {
  constructor(
    protected http: HttpClient,
    private sessionService: SessionService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  public get<T>(url: string, options?: any | null): Observable<T> {
    const pathUrl = this.buildPathUrl(url, options);

    if (options && options['params']) {
      this.serializeQueryParams(options['params']);
    }

    return this.http.get<T>(pathUrl, options).pipe(
      catchError((err): ObservableInput<any> => this.handleError(err)),
      share()
    );
  }

  public post<T>(
    url: string,
    body: any | null,
    options?: any | null
  ): Observable<T> {
    const pathUrl = this.buildPathUrl(url, options);
    return this.http.post<T>(pathUrl, body, options).pipe(
      catchError((err): ObservableInput<any> => this.handleError(err)),
      share()
    );
  }

  public put<T>(
    url: string,
    body: any | null,
    options?: any | null
  ): Observable<T> {
    const pathUrl = this.buildPathUrl(url, options);
    return this.http.put<T>(pathUrl, body, options).pipe(
      catchError((err): ObservableInput<any> => this.handleError(err)),
      share()
    );
  }

  public patch<T>(
    url: string,
    body: any | null,
    options?: any | null
  ): Observable<T> {
    const pathUrl = this.buildPathUrl(url, options);
    return this.http.patch<T>(pathUrl, body, options).pipe(
      catchError((err): ObservableInput<any> => this.handleError(err)),
      share()
    );
  }

  public delete<T>(url: string, options?: any | null): Observable<T> {
    const pathUrl = this.buildPathUrl(url, options);
    return this.http.delete<T>(pathUrl, options).pipe(
      catchError((err): ObservableInput<any> => this.handleError(err)),
      share()
    );
  }

  private buildPathUrl(url: string, options: any): string {
    if (!options || !options.pathParams) {
      return url;
    }

    const pathParams = options.pathParams;

    for (const paramName in pathParams) {
      if (pathParams.hasOwnProperty(paramName)) {
        const value = pathParams[paramName];
        url = url.replace(':' + paramName, value);
      }
    }

    delete options['pathParams'];

    return url;
  }

  private serializeQueryParams(params: any): void {
    Object.entries(params).forEach(([key, value]) => {
      if (value instanceof Array) {
        delete params[key];
        params[`${key}[]`] = value;
      }
    });
  }

  protected handleError(httpErrorRes: HttpErrorResponse) {

    if (httpErrorRes.status === 400) {
      // generic bad request, most likely failed backend validation
      //   this.notificationService.error(httpErrorRes);
    } else if (httpErrorRes.status === 401) {
      this.sessionService.clear();
      window.location.href = '/login';
      //   this.notificationService.error(httpErrorRes, { title: 'Unauthorized' });
    } else if (httpErrorRes.status === 404) {
      console.log(httpErrorRes, { title: 'Not found.' });
      //   this.notificationService.error(httpErrorRes, { title: 'Not found.' });
    } else if (httpErrorRes.status === 403) {
      console.log(httpErrorRes, { title: 'Not Allowed.' });
      //   this.notificationService.error(httpErrorRes, { title: 'Not Allowed.' });
    } else {
      // 5xx - server errors
      // TODO see about proper handling or logging
      //   this.notificationService.error(httpErrorRes, {
      //     title: 'An error occurred.'
      //   });
      console.log(httpErrorRes, { title: 'An error occurred.' });
    }

    return throwError(httpErrorRes.error);
  }

}
