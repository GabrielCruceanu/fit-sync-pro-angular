import { RouterModule, Routes } from '@angular/router';
import { WorkoutComponent } from '@app/features/workout/workout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: WorkoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutingModule {}
