import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NoAuthGuard } from '@app/auth/guards/noAuth.guard';
import { SignInComponent } from '@app/auth/pages/sign-in/sign-in.component';
import { AuthComponent } from '@app/auth/auth.component';
import { SignUpComponent } from '@app/auth/pages/sign-up/sign-up.component';
import { NewPasswordComponent } from '@app/auth/pages/new-password/new-password.component';
import { ForgotPasswordComponent } from '@app/auth/pages/forgot-password/forgot-password.component';

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
      {
        path: 'sign-in',
        component: SignInComponent,
        data: { returnUrl: window.location.pathname },
      },
      { path: 'sign-up', component: SignUpComponent },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      { path: 'new-password', component: NewPasswordComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
