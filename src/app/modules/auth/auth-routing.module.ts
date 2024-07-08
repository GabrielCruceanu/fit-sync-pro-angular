import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@app/modules/auth/auth.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
