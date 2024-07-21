import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_TRAINER } from '@app/modules/onboarding/constants/onboarding';
import {
  completeOnboardingTrainer,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingTrainerSteps, TrainingLocation } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingTrainer } from '@app/modules/onboarding/store/onboarding.selectors';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-trainer-overview',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './trainer-overview.component.html',
  styleUrl: './trainer-overview.component.scss',
})
export class TrainerOverviewComponent {
  onboardingSteps = ONBOARDING_TRAINER;
  trainingLocation = TrainingLocation;
  onboarding = this._store.selectSignal(selectOnboardingTrainer);

  constructor(private _store: Store) {}

  onSubmit() {
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[7].id,
          title: this.onboardingSteps[7].title,
          description: this.onboardingSteps[7].description,
          completed: true,
        },
      }),
    );
    this._store.dispatch(completeOnboardingTrainer({ trainerData: this.onboarding() }));
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Location }));
  }
}
