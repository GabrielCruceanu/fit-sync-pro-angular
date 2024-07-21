import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_NUTRITIONIST } from '@app/features/onboarding/constants/onboarding';
import {
  completeOnboardingNutritionist,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingNutritionistSteps } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingNutritionist } from '@app/features/onboarding/store/onboarding.selectors';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nutritionist-overview',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './nutritionist-overview.component.html',
  styleUrl: './nutritionist-overview.component.scss',
})
export class NutritionistOverviewComponent {
  onboardingSteps = ONBOARDING_NUTRITIONIST;
  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

  constructor(private _store: Store) {}

  onSubmit() {
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[6].id,
          title: this.onboardingSteps[6].title,
          description: this.onboardingSteps[6].description,
          completed: true,
        },
      }),
    );
    this._store.dispatch(completeOnboardingNutritionist({ nutritionistData: this.onboarding() }));
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Location }));
  }
}
