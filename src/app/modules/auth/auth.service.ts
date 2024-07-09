import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { UserService } from '@app/core/user/user.service';
import { AuthUtils } from '@app/modules/auth/auth.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _httpClient = inject(HttpClient);
  private _userService = inject(UserService);

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   * @param email
   */

  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post('api/auth/forgot-password', email);
  }

  /**
   * Reset password
   * @param password
   */
  resetPassword(password: string): Observable<any> {
    return this._httpClient.post('api/auth/reset-password', password);
  }

  /**
   * Sign in
   * @param credentials
   */
  signIn(credentials: { email: string; password: string }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }

    return this._httpClient.post('api/auth/sign-in', credentials).pipe(
      switchMap((response: any) => {
        // Store the access token in the local storage
        this.accessToken = response.accessToken;

        // Set the user on the user service
        this._userService.user = response.user;

        // Return a new observable with the response
        return of(response);
      }),
    );
  }

  /**
   * Sign in using the access token
   */
  signInWithToken(): Observable<any> {
    // Check if the access token exists
    if (!this.accessToken) {
      return throwError('Access token not found.');
    }
    // Sign in using the access token
    return this._httpClient
      .post('api/auth/sign-in-with-token', {
        accessToken: this.accessToken,
      })
      .pipe(
        catchError(() =>
          // Return false
          of(false),
        ),
        switchMap((response: any) => {
          // Store the access token in the local storage
          if (response.accessToken) {
            this.accessToken = response.accessToken;
          }

          // Set the authenticated flag to true
          this._authenticated = true;

          // Set the user on the user service
          this._userService.user = response.user;

          // Return a new observable with the response
          return of(true);
        }),
      );
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return a new observable
    return of(true);
  }

  /**
   * Sign up
   * @param user
   */
  signUp(user: { email: string; password: string }): Observable<any> {
    return this._httpClient.post('api/auth/sign-up', user);
  }

  /**
   * Unlock session
   * @param credentials
   */
  unlockSession(credentials: { email: string; password: string }): Observable<any> {
    return this._httpClient.post('api/auth/unlock-session', credentials);
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is already authenticated
    if (this._authenticated) {
      return of(true);
    }

    // Check if the access token exists
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }

    // Sign in using the access token
    return this.signInWithToken();
  }
}