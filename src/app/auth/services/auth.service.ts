import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthUtils } from '@app/auth/auth.utils';
import { AuthMockApi } from '@mock/common/auth/api';
import { user as userData } from '@mock/common/user/data';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import { UserService } from '@app/auth/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _httpClient = inject(HttpClient);
  private _userService = inject(UserService);
  private _authMockApi = inject(AuthMockApi);
  private _router = inject(Router);

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   * @param email
   */

  forgotPassword(email: string): Observable<any> {
    // return this._httpClient.post('api/auth/forgot-password', email);
    this.accessToken = this._authMockApi._generateJWTToken();
    this._userService.user = userData;
    this._router.navigate(['/dashboard']);
    return of(true);
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
    console.log('credentials', credentials);
    // Sign in successful

    // return this._httpClient.post('api/auth/sign-in', credentials).pipe(
    //   switchMap((response: any) => {
    //     // Store the access token in the local storage
    //     this.accessToken = response.accessToken;
    //
    //     // Set the user on the user service
    //     this._userService.user = response.user;
    //
    //     // Return a new observable with the response
    //     return of(response);
    //   }),
    // );

    if (credentials.email === 'client@fitsync.pro' && credentials.password === 'admin') {
      this.accessToken = this._authMockApi._generateJWTToken();
      this._userService.user = userData;
      this._router.navigate(['dashboard']);
      return of([
        200,
        {
          user: cloneDeep(this._authMockApi._user),
          accessToken: this._authMockApi._generateJWTToken(),
          tokenType: 'bearer',
        },
      ]);
    }

    // Invalid credentials
    return of([404, false]);
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
    // return this._httpClient
    //   .post('api/auth/sign-in-with-token', {
    //     accessToken: this.accessToken,
    //   })
    //   .pipe(
    //     catchError(() =>
    //       // Return false
    //       of(false),
    //     ),
    //     switchMap((response: any) => {
    //       // Store the access token in the local storage
    //       if (response.accessToken) {
    //         this.accessToken = response.accessToken;
    //       }
    //
    //       // Set the authenticated flag to true
    //       this._authenticated = true;
    //
    //       // Set the user on the user service
    //       this._userService.user = response.user;
    //
    //       // Return a new observable with the response
    //       return of(true);
    //     }),
    //   );
    if (this.accessToken.length > 0) {
      this._authenticated = true;
      this._userService.user = userData;
      this._router.navigate(['dashboard']);
      return of([
        200,
        {
          user: cloneDeep(this._authMockApi._user),
          accessToken: this._authMockApi._generateJWTToken(),
          tokenType: 'bearer',
        },
      ]);
    }
    return of([401, false]);
  }

  /**
   * Sign out
   */
  signOut(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');

    this.accessToken = '';

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return a new observable
    this._router.navigate(['auth/sign-in']);
    return of(true);
  }

  /**
   * Sign up
   * @param user
   */
  signUp(user: { email: string; password: string }): Observable<any> {
    // return this._httpClient.post('api/auth/sign-up', user);
    this.accessToken = this._authMockApi._generateJWTToken();
    this._userService.user = userData;
    this._router.navigate(['dashboard']);
    return of(true);
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
