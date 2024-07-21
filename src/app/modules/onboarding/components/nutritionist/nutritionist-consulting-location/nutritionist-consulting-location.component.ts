import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import {
  NutritionistLocation,
  OnboardingNutritionistSteps,
  OnboardingStep,
} from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_NUTRITIONIST } from '@app/modules/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setNutritionistOnboardingConsultingLocation,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingNutritionist } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-nutritionist-consulting-location',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf, NgClass, JsonPipe],
  templateUrl: './nutritionist-consulting-location.component.html',
  styleUrl: './nutritionist-consulting-location.component.scss',
})
export class NutritionistConsultingLocationComponent {
  onboardingSteps: OnboardingStep[] = ONBOARDING_NUTRITIONIST;
  locationList = Object.values(NutritionistLocation);
  consultingLocation: string[];
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

  constructor(private _store: Store) {
    this.consultingLocation = this.onboarding().consultingLocation ? this.onboarding().consultingLocation : [];
  }

  setConsultingLocation(value: string) {
    if (this.consultingLocation.includes(value)) {
      this.consultingLocation = this.consultingLocation.filter((location) => location !== value);
      return;
    }
    this.consultingLocation = [...this.consultingLocation, value];
  }

  onSubmit() {
    if (this.consultingLocation.length === 0) {
      this.error = 'Please select your consulting location';
      return;
    }

    this._store.dispatch(
      setNutritionistOnboardingConsultingLocation({
        consultingLocation: this.consultingLocation,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Availability }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[3].id,
          title: this.onboardingSteps[3].title,
          description: this.onboardingSteps[3].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.NutritionExperience }));
  }

  resetError() {
    this.error = null;
  }
}
