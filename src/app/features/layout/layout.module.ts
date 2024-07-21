import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from '@app/features/layout/layout-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutRoutingModule, AngularSvgIconModule.forRoot()],
})
export class LayoutModule {}
