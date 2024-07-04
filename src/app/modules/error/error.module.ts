import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from '@app/modules/error/error-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [],
  imports: [ErrorRoutingModule, AngularSvgIconModule.forRoot()],
})
export class ErrorModule {}
