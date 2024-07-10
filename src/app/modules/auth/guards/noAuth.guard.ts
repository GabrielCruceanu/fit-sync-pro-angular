import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { AuthService } from '@app/modules/auth/auth.service';

export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);

  // Check the authentication status
  return inject(AuthService)
    .check()
    .pipe(
      switchMap((authenticated) => {
        // If the user is authenticated...
        if (authenticated) {
          return of(router.parseUrl(''));
        }

        // Allow the access
        return of(true);
      }),
    );
};
