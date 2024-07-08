import { RouterModule, Routes } from '@angular/router';
import { NutritionComponent } from '@app/modules/nutrition/nutrition.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: NutritionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionRoutingModule {}
