import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import environment from 'src/environments/environment';
import { AuthResponceData } from './auth-response-data.interface';
import User from './user.model';

@Injectable({ providedIn: 'root' })
export default class AuthService {
  user = new BehaviorSubject<User | null>(null);

  tokenExpirationTimer: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.httpClient
      .post<AuthResponceData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        },
      )
      .pipe(
        catchError(AuthService.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn,
          );
        }),
      );
  }

  loging(email: string, password: string) {
    return this.httpClient
      .post<AuthResponceData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        },
      )
      .pipe(
        catchError(AuthService.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn,
          );
        }),
      );
  }

  autoLogin() {
    const data = localStorage.getItem('userData');
    if (!data) {
      return;
    }
    const userData: {
      email: string;
      id: string;
      token: string;
      tokenExpirationDate: string;
    } | null = JSON.parse(data);

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData.token,
      new Date(userData.tokenExpirationDate),
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuraton =
        new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuraton);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private static handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown message occured';
    // console.log(errorResponse.error.error);
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This passord is incorrect';
        break;
      default:
        errorMessage = 'An unknown message occured';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    refreshToken: string,
    expiresIn: number,
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, refreshToken, expirationDate);

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
