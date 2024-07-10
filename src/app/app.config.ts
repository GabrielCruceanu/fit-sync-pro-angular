import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from '@app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAuth } from '@app/modules/auth/auth.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    provideAuth(),
  ],
};
