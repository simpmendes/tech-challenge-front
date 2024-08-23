import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, take } from 'rxjs/operators';
import { User } from 'src/models/User';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: User;
    this.authService.currentUser$.pipe(take(1)).subscribe((user: User) => {
      currentUser = user

      if(currentUser){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.accessToken}`
          }
        });
      }

    });


    return next.handle(request).pipe(
      catchError(error => {
        if(error){
          localStorage.removeItem('user');
        }
        return throwError(error);
      })
    );
  }
}
