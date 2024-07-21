import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/features/layout/layout.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/auth/guards/auth.guard';
import { OnboardingGuard } from '@app/features/layout/guards/onboarding.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard, OnboardingGuard],
    canActivateChild: [AuthGuard, OnboardingGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'progress',
        loadChildren: () => import('../progress/progress.module').then((m) => m.ProgressModule),
      },
      {
        path: 'workout',
        loadChildren: () => import('../workout/workout.module').then((m) => m.WorkoutModule),
      },
      {
        path: 'nutrition',
        loadChildren: () => import('../nutrition/nutrition.module').then((m) => m.NutritionModule),
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then((m) => m.ChatModule),
      },
    ],
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
