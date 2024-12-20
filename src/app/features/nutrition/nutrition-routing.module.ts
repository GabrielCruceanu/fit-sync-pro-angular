import { RouterModule, Routes } from '@angular/router';
import { NutritionComponent } from '@app/features/nutrition/nutrition.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionRoutingModule {}
