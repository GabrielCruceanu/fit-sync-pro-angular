import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/modules/auth/guards/auth.guard';
import { NoAuthGuard } from '@app/modules/auth/guards/noAuth.guard';
import { LayoutComponent } from '@app/modules/layout/layout.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  // Redirect signed-in user to the '/dashboard'
  {
    path: 'signed-in-redirect',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  // Auth routes for guests
  {
    path: 'auth',
    loadChildren: () => import('@app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // Auth routes for authenticated users
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  // Other routes go to the 'error/404' component
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AngularSvgIconModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
