/**
 * Auth Interceptor
 * This interceptor will add the Authorization header to all requests
 * if the access token is not expired.
 * It will also handle the 401 Unauthorized responses and sign out
 * the user if the access token is expired.
 * @param req
 * @param next
 */
import { HttpErrorResponse, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '@app/core/auth/auth.service';
import { inject } from '@angular/core';
import { AuthUtils } from '@app/core/auth/auth.utils';
import { catchError, throwError } from 'rxjs';

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  // Clone the request object
  let newReq = req.clone();

  // Request
  //
  // If the access token didn't expire, add the Authorization header.
  // We won't add the Authorization header if the access token expired.
  // This will force the server to return a "401 Unauthorized" response
  // for the protected API routes which our response interceptor will
  // catch and delete the access token from the local storage while logging
  // the user out from the app.

  if (authService.accessToken && !AuthUtils.isTokenExpired(authService.accessToken)) {
    newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authService.accessToken),
    });
  }

  // Response
  return next(newReq).pipe(
    catchError((error) => {
      // Catch "401 Unauthorized" responses
      if (error instanceof HttpErrorResponse && error.status === 401) {
        // Sign out
        authService.signOut();

        // Reload the app
        location.reload();
      }

      return throwError(error);
    }),
  );
};
