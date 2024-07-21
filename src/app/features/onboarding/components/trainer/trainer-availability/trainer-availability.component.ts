import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { OnboardingStep, OnboardingTrainerSteps } from '@app/features/onboarding/models/onboarding.model';
import {
  AVAILABILITY_DAYS,
  AVAILABILITY_TIME,
  ONBOARDING_TRAINER,
} from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingAvailability,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-trainer-availability',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './trainer-availability.component.html',
  styleUrl: './trainer-availability.component.scss',
})
export class TrainerAvailabilityComponent {
  daysForm!: FormGroup;
  timesForm!: FormGroup;
  clientAvailabilityDays = AVAILABILITY_DAYS;
  clientAvailabilityTime = AVAILABILITY_TIME;
  onboardingSteps: OnboardingStep[] = ONBOARDING_TRAINER;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.daysForm = this._formBuilder.group({
      days: this._formBuilder.array(
        this.clientAvailabilityDays.map((day) =>
          this._formBuilder.group({
            name: [day.name],
            selected: this.onboarding().availabilityDays.includes(day.name) ? true : [day.selected],
          }),
        ),
      ),
    });
    this.timesForm = this._formBuilder.group({
      times: this._formBuilder.array(
        this.clientAvailabilityTime.map((time) =>
          this._formBuilder.group({
            name: [time.name],
            selected: this.onboarding().availabilityTimes.includes(time.name) ? true : [time.selected],
          }),
        ),
      ),
    });
  }

  get days() {
    return this.daysForm.get('days') as FormArray;
  }

  get times() {
    return this.timesForm.get('times') as FormArray;
  }

  onSubmit() {
    if (this.days.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one day';
      return;
    }
    if (this.times.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one time of day';
      return;
    }

    const days = this.days.controls.filter((control) => control.value.selected).map((control) => control.value.name);
    const times = this.times.controls.filter((control) => control.value.selected).map((control) => control.value.name);

    this._store.dispatch(
      setTrainerOnboardingAvailability({
        availability: { days, times },
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Location }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[5].id,
          title: this.onboardingSteps[5].title,
          description: this.onboardingSteps[5].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.TrainingLocation }));
  }

  resetError() {
    this.error = null;
  }
}
