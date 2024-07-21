import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import {
  OnboardingStep,
  OnboardingTrainerSteps,
  TrainingLocation,
} from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_TRAINER } from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingFitnessExperience,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';
import { TRAINER_EXPERIENCE, TRAINER_TYPES } from '@app/features/onboarding/constants/trainer';
import { TrainerType } from '@app/features/onboarding/models/trainer.model';

@Component({
  selector: 'app-trainer-fitness-experience',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf, NgClass, JsonPipe],
  templateUrl: './trainer-fitness-experience.component.html',
  styleUrl: './trainer-fitness-experience.component.scss',
})
export class TrainerFitnessExperienceComponent {
  form!: FormGroup;
  trainerTypes: TrainerType[] = TRAINER_TYPES;
  yearsOfExperience = TRAINER_EXPERIENCE;
  onboardingSteps: OnboardingStep[] = ONBOARDING_TRAINER;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);
  protected readonly TrainingLocation = TrainingLocation;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      trainerType: [this.onboarding().trainerType, [Validators.required]],
      trainingExperience: [this.onboarding().trainingExperience, [Validators.required]],
    });
  }

  get trainerType() {
    return this.form.get('trainerType');
  }

  get trainingExperience() {
    return this.form.get('trainingExperience');
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(
      setTrainerOnboardingFitnessExperience({
        trainerType: this.trainerType?.value,
        trainingExperience: this.trainingExperience?.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.TrainingLocation }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.NutritionExperience }));
  }

  resetError() {
    this.error = null;
  }
}
