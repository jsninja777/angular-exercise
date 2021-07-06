import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from '@app/services/loading/loading.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        private _loading: LoadingService,
        private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loading.setLoading(true, request.url);
        return next.handle(request).pipe(catchError(response => {
            this._loading.setLoading(false, request.url);

            if (403 === response.status) {
                this.router.navigate(['errors', 'error-403']);
            }

            if (500 === response.status) {
                this.router.navigate(['errors', 'error-500']);
            }

            let error: string;
            if (typeof (response.error) === 'object') {
                error = response.error.error;
            } else {
                error = response.error;
            }
            error = error || response.statusText;
            return throwError(error);
        })).pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
            if (evt instanceof HttpResponse) {
              this._loading.setLoading(false, request.url);
            }
            return evt;
          }));
    }
}
