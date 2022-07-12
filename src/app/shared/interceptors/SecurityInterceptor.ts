import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, finalize } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

    private AUTH_HEADER = 'Authorization';

    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(private authSrv: AuthService, private toastr : ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.url.includes('login') && !req.url.includes('logout') && !req.url.includes('refresh')){
            console.log("On ajoute les headers");
            req = this.addAuthenticationToken(req);
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error && error.status === 401){
                    if(req.url.search('/refresh') !== -1) {
                        this.refreshTokenSubject.next(null);
                        this.refreshTokenInProgress = false;
                        this.authSrv.logout().pipe().subscribe();
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
                                localStorage.setItem('access_token',response.data.access_token);
                                localStorage.setItem('refresh_token',response.data.refresh_token);
                                return next.handle(this.addAuthenticationToken(req))
                            })
                        )
                    }
                } else {
                    this.toastr.error(error.message,'Erreur',{positionClass : 'toast-bottom-full-width', closeButton : true});
                    return throwError(error);
                }
            })
        );
    }

    private addAuthenticationToken(req: HttpRequest<any>): HttpRequest<any> {
        const jwtToken = localStorage.getItem('access_token');
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
