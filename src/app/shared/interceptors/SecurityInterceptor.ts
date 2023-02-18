import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

    private AUTH_HEADER = 'Authorization';

    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(private authSrv: AuthService, private _router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('login') && !req.url.includes('logout')){
            req = this.addAuthenticationToken(req);
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error && error.status === 401){
                    if(req.url.search('/refresh') !== -1) {
                        this.refreshTokenSubject.next(null);
                        this.refreshTokenInProgress = false;
                        
                        //let navigation : Navigation = this._router.getCurrentNavigation();
                        //this._router.
                        this.authSrv.logout().pipe().subscribe();
                        this._router.navigate(['/login']);
                        return throwError(error);
                    }

                    if (this.refreshTokenInProgress) {
                        return this.refreshTokenSubject.pipe(
                            filter(result => result !== null),
                            take(1),
                            switchMap(() => next.handle(this.addAuthenticationToken(req)))
                        );
                    } else {
                        return this.refreshAccessToken().pipe(
                            switchMap((response)=> {
                                localStorage.setItem('access_token',response.access_token);
                                localStorage.setItem('refresh_token',response.refresh_token);
                                return next.handle(this.addAuthenticationToken(req))
                            })
                        )
                    }
                } else {
                    return throwError(() => new HttpErrorResponse(error));
                }
            })
        );
    }

    private addAuthenticationToken(req: HttpRequest<any>): HttpRequest<any> {
        let jwtToken;
        if(req.url.includes('refresh')){
            jwtToken = localStorage.getItem('refresh_token');
        } else {
            jwtToken = localStorage.getItem('access_token');
        }
         
        if (jwtToken) {
            const cloned = req.clone({
                headers: req.headers.set(this.AUTH_HEADER, 'Bearer ' + jwtToken)
            });
            return cloned;
        } else {
            return req;
        }
       
    }

    private refreshAccessToken(): Observable<any> {
        return this.authSrv.refresh();
    }
}
