import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  }, // Redirect signed-in user to the '/dashboard'
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  }, // Auth routes for guests
  {
    path: 'auth',
    loadChildren: () => import('@app/modules/auth/auth.module').then((m) => m.AuthModule),
  }, // Routes for authenticated users
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'onboarding',
    loadChildren: () => import('@app/modules/onboarding/onboarding.module').then((m) => m.OnboardingModule),
  }, // Other routes go to the 'error/404' component
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularSvgIconModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
