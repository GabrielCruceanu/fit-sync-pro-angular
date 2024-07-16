import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from '@app/modules/onboarding/onboarding.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/modules/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: OnboardingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
