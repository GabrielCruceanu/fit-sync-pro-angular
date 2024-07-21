import { Component } from '@angular/core';
import { selectOnboardingCurrentStep } from '@app/features/onboarding/store/onboarding.selectors';
import { OnboardingTrainerSteps } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { TrainerPersonalDetailsComponent } from '@app/features/onboarding/components/trainer/trainer-personal-details/trainer-personal-details.component';
import { TrainerContactDetailsComponent } from '@app/features/onboarding/components/trainer/trainer-contact-details/trainer-contact-details.component';
import { TrainerNutritionistExperienceComponent } from '@app/features/onboarding/components/trainer/trainer-nutritionist-experience/trainer-nutritionist-experience.component';
import { TrainerFitnessExperienceComponent } from '@app/features/onboarding/components/trainer/trainer-fitness-experience/trainer-fitness-experience.component';
import { TrainerTrainingLocationComponent } from '@app/features/onboarding/components/trainer/trainer-training-location/trainer-training-location.component';
import { TrainerAvailabilityComponent } from '@app/features/onboarding/components/trainer/trainer-availability/trainer-availability.component';
import { TrainerLocationComponent } from '@app/features/onboarding/components/trainer/trainer-location/trainer-location.component';
import { TrainerOverviewComponent } from '@app/features/onboarding/components/trainer/trainer-overview/trainer-overview.component';

@Component({
  selector: 'app-trainer-onboarding',
  standalone: true,
  imports: [
    TrainerPersonalDetailsComponent,
    TrainerContactDetailsComponent,
    TrainerNutritionistExperienceComponent,
    TrainerFitnessExperienceComponent,
    TrainerTrainingLocationComponent,
    TrainerAvailabilityComponent,
    TrainerLocationComponent,
    TrainerOverviewComponent,
  ],
  templateUrl: './trainer-onboarding.component.html',
  styleUrl: './trainer-onboarding.component.scss',
})
export class TrainerOnboardingComponent {
  onboardingCurrentStep = this._store.selectSignal(selectOnboardingCurrentStep);
  trainerOnboardingSteps = OnboardingTrainerSteps;

  constructor(private _store: Store) {}
}
