import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_GYM } from '@app/modules/onboarding/constants/onboarding';
import {
  completeOnboardingGym,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingGymSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingGym } from '@app/modules/onboarding/store/onboarding.selectors';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gym-overview',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './gym-overview.component.html',
  styleUrl: './gym-overview.component.scss',
})
export class GymOverviewComponent {
  onboardingSteps = ONBOARDING_GYM;
  onboarding = this._store.selectSignal(selectOnboardingGym);

  constructor(private _store: Store) {}

  onSubmit() {
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[4].id,
          title: this.onboardingSteps[4].title,
          description: this.onboardingSteps[4].description,
          completed: true,
        },
      }),
    );
    this._store.dispatch(completeOnboardingGym({ gymData: this.onboarding() }));
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingGymSteps.Location }));
  }
}
