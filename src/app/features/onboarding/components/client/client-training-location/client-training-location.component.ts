import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import {
  OnboardingClientSteps,
  OnboardingStep,
  TrainingInPerson,
  TrainingLocation,
  TrainingOnline,
} from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingTrainingLocation,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { selectOnboardingClient } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-training-location',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, SvgIconComponent, ReactiveFormsModule],
  templateUrl: './client-training-location.component.html',
  styleUrl: './client-training-location.component.scss',
})
export class ClientTrainingLocationComponent {
  form!: FormGroup;
  trainingLocation = TrainingLocation;
  trainingOnline = TrainingOnline;
  trainingInPerson = TrainingInPerson;
  onboardingSteps: OnboardingStep[] = ONBOARDING_CLIENT;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingClient);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      location: [this.onboarding().trainingLocation ? this.onboarding().trainingLocation : '', Validators.required],
      howToTrain: [this.onboarding().howToTrain ? this.onboarding().howToTrain : '', Validators.required],
    });
  }

  get location() {
    return this.form.get('location');
  }

  get howToTrain() {
    return this.form.get('howToTrain');
  }

  setLocation(value: TrainingLocation) {
    this.location?.setValue(value);
  }

  setHowToTrain(value: TrainingOnline | TrainingInPerson) {
    this.howToTrain?.setValue(value);
  }

  onSubmit() {
    if (this.location?.invalid) {
      this.error = 'Please select your fitness location';
      return;
    }
    if (this.howToTrain?.invalid) {
      this.error = 'Please select how you want to train';
      return;
    }

    this._store.dispatch(
      setClientOnboardingTrainingLocation({
        trainingLocation: this.location?.value,
        howToTrain: this.howToTrain?.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.DietaryPreferences }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.FitnessExperience }));
  }

  resetError() {
    this.error = null;
  }
}
