import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'confirmation-required',
        loadChildren: () => import('@app/modules/auth/pages/confirmation-required/confirmation-required.routes'),
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('@app/modules/auth/pages/forgot-password/forgot-password.routes'),
      },
      {
        path: 'reset-password',
        loadChildren: () => import('@app/modules/auth/pages/reset-password/reset-password.routes'),
      },
      { path: 'sign-in', loadChildren: () => import('@app/modules/auth/pages/sign-in/sign-in.routes') },
      { path: 'sign-up', loadChildren: () => import('@app/modules/auth/pages/sign-up/sign-up.routes') },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
