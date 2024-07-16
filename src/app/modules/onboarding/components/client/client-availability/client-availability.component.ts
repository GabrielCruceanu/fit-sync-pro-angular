import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CLIENT_AVAILABILITY_DAYS, CLIENT_AVAILABILITY_TIME } from '@app/core/constants/client';
import { OnboardingClientSteps, OnboardingStep } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding-steps';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingAvailability,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-client-availability',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './client-availability.component.html',
  styleUrl: './client-availability.component.scss',
})
export class ClientAvailabilityComponent {
  daysForm!: FormGroup;
  timesForm!: FormGroup;
  clientAvailabilityDays = CLIENT_AVAILABILITY_DAYS;
  clientAvailabilityTime = CLIENT_AVAILABILITY_TIME;
  onboardingSteps: OnboardingStep[] = ONBOARDING_CLIENT;
  error: string | null = null;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.daysForm = this._formBuilder.group({
      days: this._formBuilder.array(
        this.clientAvailabilityDays.map((day) =>
          this._formBuilder.group({
            name: [day.name],
            selected: [day.selected],
          }),
        ),
      ),
    });
    this.timesForm = this._formBuilder.group({
      times: this._formBuilder.array(
        this.clientAvailabilityTime.map((time) =>
          this._formBuilder.group({
            name: [time.name],
            selected: [time.selected],
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
      setClientOnboardingAvailability({
        availability: { days, times },
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Location }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Goals }));
  }

  resetError() {
    this.error = null;
  }
}
