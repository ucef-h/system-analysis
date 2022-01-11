import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, subscribeOn, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1), // subscribe and run the code once then unsubscribe
            exhaustMap(user => { 
                if(!user) {
                    return next.handle(req);
                }
                let token: string = user?.token ?? '';
                const modifiedRequest = req.clone({
                    params: new HttpParams().set('auth', token)
                });
                return next.handle(modifiedRequest);
            })
        );      
    }

}