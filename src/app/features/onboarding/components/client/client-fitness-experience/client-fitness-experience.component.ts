import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import {
  FitnessExperience,
  OnboardingClientSteps,
  OnboardingStep,
} from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingFitnessExperience,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingClient } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-fitness-experience',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent],
  templateUrl: './client-fitness-experience.component.html',
  styleUrl: './client-fitness-experience.component.scss',
})
export class ClientFitnessExperienceComponent {
  form!: FormGroup;
  fitnessExperience = FitnessExperience;
  onboardingSteps: OnboardingStep[] = ONBOARDING_CLIENT;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingClient);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      experience: [this.onboarding().fitnessExperience ? this.fitnessExperience : '', Validators.required],
    });
  }

  get experience() {
    return this.form.get('experience');
  }

  setExperience(value: FitnessExperience) {
    this.experience?.setValue(value);
  }

  onSubmit() {
    if (this.experience?.invalid) {
      this.error = 'Please select your fitness experience';
      return;
    }

    this._store.dispatch(setClientOnboardingFitnessExperience({ fitnessExperience: this.experience?.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.TrainingLocation }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[2].id,
          title: this.onboardingSteps[2].title,
          description: this.onboardingSteps[2].description,
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
