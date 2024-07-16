import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '@app/modules/auth/user.service';
import { of, switchMap } from 'rxjs';

export const OnboardingGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const router: Router = inject(Router);

  // Check the onboarding status
  return inject(UserService)
    .checkOnboarding()
    .pipe(
      switchMap((onboarding) => {
        // If the user has completed onboarding...
        if (!onboarding) {
          // Redirect to the onboarding page
          const urlTree = router.parseUrl('/onboarding');

          return of(urlTree);
        }

        // Allow the access
        return of(true);
      }),
    );
};
