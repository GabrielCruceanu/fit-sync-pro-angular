import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from '@app/features/onboarding/onboarding-routing.module';
import { OnboardingService } from '@app/features/onboarding/services/onboarding.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, OnboardingRoutingModule],
  providers: [OnboardingService],
})
export class OnboardingModule {}
