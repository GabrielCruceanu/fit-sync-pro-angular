import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthService } from '@app/core/auth/auth.service';
import { authInterceptor } from '@app/core/auth/auth.interceptor';

export const provideAuth = (): Array<Provider | EnvironmentProviders> => {
  return [
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => inject(AuthService),
      multi: true,
    },
  ];
};
