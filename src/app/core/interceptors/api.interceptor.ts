import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService } from '../service/user.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(
        request.clone({
          url: environment.apiUrl + request.url,
          headers: new HttpHeaders({
            Authorization: `Bearer ${localStorage.getItem('token')}` || '',
          }),
        })
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Unauthorized) {
            this.userService.clearData();
          }

          return throwError(error);
        })
      );
  }
}
