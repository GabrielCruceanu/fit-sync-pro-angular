import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from '@app/features/progress/progress.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ProgressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressRoutingModule {}
