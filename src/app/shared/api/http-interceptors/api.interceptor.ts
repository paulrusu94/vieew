import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams
} from '@angular/common/http';
import { SessionService } from '../../services/session.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private session: SessionService) {}

  /**
   * Build absolute path out of relative path and environment base url/
   * @param path
   * @returns {string}
   */
  private static buildUrl(path: string): string {
    return path.includes('http') || path.includes('https') ? path : environment.api.ecareApi + path;
  }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const session = this.session.get();
    const authToken = session ? (
      session.access_token || session.accessToken
    ) : null;
    // Handle authentication token if there is any
    if (authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }

    // Handle default content type if no any other
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }

    var urlWithParams = decodeURIComponent(req.urlWithParams);

    // Handle building of absolute path out of base url and relative path.
    req = req.clone({
      url: ApiInterceptor.buildUrl(urlWithParams),
      headers: req.headers.set('UseCamel', 'true'),
      params: new HttpParams(),
    });

    return next.handle(req);
  }

}
