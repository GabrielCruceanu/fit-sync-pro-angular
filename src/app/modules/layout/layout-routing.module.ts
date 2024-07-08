import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/modules/layout/layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'profile',
    component: LayoutComponent,
    loadChildren: () => import('../profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'settings',
    component: LayoutComponent,
    loadChildren: () => import('../settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'progress',
    component: LayoutComponent,
    loadChildren: () => import('../progress/progress.module').then((m) => m.ProgressModule),
  },
  {
    path: 'workout',
    component: LayoutComponent,
    loadChildren: () => import('../workout/workout.module').then((m) => m.WorkoutModule),
  },
  {
    path: 'nutrition',
    component: LayoutComponent,
    loadChildren: () => import('../nutrition/nutrition.module').then((m) => m.NutritionModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
