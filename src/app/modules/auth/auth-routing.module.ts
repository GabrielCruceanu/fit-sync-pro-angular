import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoAuthGuard } from '@app/modules/auth/guards/noAuth.guard';
import { AuthGuard } from '@app/modules/auth/guards/auth.guard';
import { SignInComponent } from '@app/modules/auth/pages/sign-in/sign-in.component';
import { AuthComponent } from '@app/modules/auth/auth.component';
import { SignUpComponent } from '@app/modules/auth/pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, data: { returnUrl: window.location.pathname } },
      { path: 'sign-up', component: SignUpComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
      // { path: 'new-password', component: NewPasswordComponent },
      // { path: 'two-steps', component: TwoStepsComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
