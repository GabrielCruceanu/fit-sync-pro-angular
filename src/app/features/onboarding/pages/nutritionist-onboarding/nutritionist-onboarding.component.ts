import { Component } from '@angular/core';
import { selectOnboardingCurrentStep } from '@app/features/onboarding/store/onboarding.selectors';
import { OnboardingNutritionistSteps } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { NutritionistPersonalDetailsComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-personal-details/nutritionist-personal-details.component';
import { NutritionistContactDetailsComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-contact-details/nutritionist-contact-details.component';
import { NutritionistExperienceComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-experience/nutritionist-experience.component';
import { NutritionistConsultingLocationComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-consulting-location/nutritionist-consulting-location.component';
import { NutritionistAvailabilityComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-availability/nutritionist-availability.component';
import { NutritionistLocationComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-location/nutritionist-location.component';
import { NutritionistOverviewComponent } from '@app/features/onboarding/components/nutritionist/nutritionist-overview/nutritionist-overview.component';

@Component({
  selector: 'app-nutritionist-onboarding',
  standalone: true,
  imports: [
    NutritionistPersonalDetailsComponent,
    NutritionistContactDetailsComponent,
    NutritionistExperienceComponent,
    NutritionistConsultingLocationComponent,
    NutritionistAvailabilityComponent,
    NutritionistLocationComponent,
    NutritionistOverviewComponent,
  ],
  templateUrl: './nutritionist-onboarding.component.html',
  styleUrl: './nutritionist-onboarding.component.scss',
})
export class NutritionistOnboardingComponent {
  onboardingCurrentStep = this._store.selectSignal(selectOnboardingCurrentStep);
  nutritionistOnboardingSteps = OnboardingNutritionistSteps;

  constructor(private _store: Store) {}
}
