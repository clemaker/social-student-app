import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationsInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let action = null;
    if (environment.api.login == req.url) {
      action = 'login';
    } else if (environment.api.register == req.url) {
      action = 'register'
    } else {
      return next.handle(req);
    }
    this.loadingService[action] = true;
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'Error Network';
        if (error.status === 404) {
          message = 'Invalid Credentials';
        } else if (error.status === 400) {
          message = 'Form Invalid';
        } else if (error.status === 409) {
          message = error.error.error;
        } else if (error.status === 500) {
          message = 'Unavailable Service';
        }
        throw message;
      }),
      finalize(() => {
        this.loadingService[action] = false;
      })
    );
  }
}
