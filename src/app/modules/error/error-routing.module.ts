import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '@app/modules/error/pages/error404/error404.component';
import { ErrorComponent } from '@app/modules/error/error.component';
import { Error500Component } from '@app/modules/error/pages/error500/error500.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: '',
        redirectTo: '404',
        pathMatch: 'full',
      },
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: '500',
        component: Error500Component,
      },
      {
        path: '**',
        redirectTo: 'errors/404',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
