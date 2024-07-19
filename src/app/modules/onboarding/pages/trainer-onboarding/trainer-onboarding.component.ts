import { Component } from '@angular/core';
import { selectOnboardingCurrentStep } from '@app/modules/onboarding/store/onboarding.selectors';
import { OnboardingTrainerSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { TrainerPersonalDetailsComponent } from '@app/modules/onboarding/components/trainer/trainer-personal-details/trainer-personal-details.component';
import { TrainerContactDetailsComponent } from '@app/modules/onboarding/components/trainer/trainer-contact-details/trainer-contact-details.component';
import { TrainerNutritionistExperienceComponent } from '@app/modules/onboarding/components/trainer/trainer-nutritionist-experience/trainer-nutritionist-experience.component';
import { TrainerFitnessExperienceComponent } from '@app/modules/onboarding/components/trainer/trainer-fitness-experience/trainer-fitness-experience.component';
import { TrainerTrainingLocationComponent } from '@app/modules/onboarding/components/trainer/trainer-training-location/trainer-training-location.component';
import { TrainerAvailabilityComponent } from '@app/modules/onboarding/components/trainer/trainer-availability/trainer-availability.component';
import { TrainerLocationComponent } from '@app/modules/onboarding/components/trainer/trainer-location/trainer-location.component';
import { TrainerOverviewComponent } from '@app/modules/onboarding/components/trainer/trainer-overview/trainer-overview.component';

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
