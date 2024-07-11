import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { AuthService } from '@app/modules/auth/services/auth.service';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);

  // Check the authentication status
  return inject(AuthService)
    .check()
    .pipe(
      switchMap((authenticated) => {
        // If the user is not authenticated...
        if (!authenticated) {
          // Redirect to the sign-in page with a redirectUrl param
          const redirectURL = state.url === '/sign-out' ? '' : `redirectURL=${state.url}`;
          const urlTree = router.parseUrl(`auth/sign-in?${redirectURL}`);

          return of(urlTree);
        }

        // Allow the access
        return of(true);
      }),
    );
};
