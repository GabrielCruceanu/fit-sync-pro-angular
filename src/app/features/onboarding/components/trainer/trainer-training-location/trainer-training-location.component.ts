import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import {
  OnboardingStep,
  OnboardingTrainerSteps,
  TrainingInPerson,
  TrainingLocation,
  TrainingOnline,
} from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_TRAINER } from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingTrainingLocation,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-trainer-training-location',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf, NgClass, JsonPipe],
  templateUrl: './trainer-training-location.component.html',
  styleUrl: './trainer-training-location.component.scss',
})
export class TrainerTrainingLocationComponent {
  onboardingSteps: OnboardingStep[] = ONBOARDING_TRAINER;
  trainingLocationList = Object.values(TrainingLocation);
  trainingOnlineList = Object.values(TrainingOnline);
  trainingInPersonList = Object.values(TrainingInPerson);
  trainingLocationType = TrainingLocation;
  trainingLocation: string[];
  trainingOnline: string[];
  trainingInPerson: string[];
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);
  protected readonly TrainingLocation = TrainingLocation;

  constructor(private _store: Store) {
    this.trainingLocation = this.onboarding().trainingLocation ? this.onboarding().trainingLocation : [];
    this.trainingOnline = this.onboarding().trainingOnline ? this.onboarding().trainingOnline : [];
    this.trainingInPerson = this.onboarding().trainingInPerson ? this.onboarding().trainingInPerson : [];
  }

  setTrainingLocation(value: string) {
    console.log('setTrainingLocation value', value);
    if (this.trainingLocation.includes(value)) {
      this.trainingLocation = this.trainingLocation.filter((location) => location !== value);
      return;
    }
    this.trainingLocation = [...this.trainingLocation, value];
  }

  setTrainingOnline(value: string) {
    if (this.trainingOnline.includes(value)) {
      this.trainingOnline = this.trainingOnline.filter((online) => online !== value);
      return;
    }
    this.trainingOnline = [...this.trainingOnline, value];
  }

  setTrainingInPerson(value: string) {
    if (this.trainingInPerson.includes(value)) {
      this.trainingInPerson = this.trainingInPerson.filter((person) => person !== value);
      return;
    }
    this.trainingInPerson = [...this.trainingInPerson, value];
  }

  onSubmit() {
    if (this.trainingLocation.length === 0) {
      this.error = 'Please select your training location';
      return;
    }
    if (this.trainingLocation.includes(TrainingLocation.Online) && this.trainingOnline.length === 0) {
      this.error = 'Please select how you want to train online';
      return;
    }
    if (this.trainingLocation.includes(TrainingLocation.InPerson) && this.trainingInPerson.length === 0) {
      this.error = 'Please select how you want to train in person';
      return;
    }
    this._store.dispatch(
      setTrainerOnboardingTrainingLocation({
        trainingLocation: this.trainingLocation,
        trainingOnline: this.trainingOnline,
        trainingInPerson: this.trainingInPerson,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Availability }));
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
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.FitnessExperience }));
  }

  resetError() {
    this.error = null;
  }
}
