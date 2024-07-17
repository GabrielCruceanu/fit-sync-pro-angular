import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingGoals,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingClientSteps, OnboardingStep } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding-steps';
import { CLIENT_FITNESS_GOALS } from '@app/core/constants/client';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgIf } from '@angular/common';
import { selectOnboardingClient } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-goals',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ReactiveFormsModule, SvgIconComponent, NgIf],
  templateUrl: './client-goals.component.html',
  styleUrl: './client-goals.component.scss',
})
export class ClientGoalsComponent implements OnInit {
  form!: FormGroup;
  clientFitnessGoals = CLIENT_FITNESS_GOALS;
  onboardingSteps: OnboardingStep[] = ONBOARDING_CLIENT;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingClient);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      goals: this._formBuilder.array(
        this.clientFitnessGoals.map((goal) =>
          this._formBuilder.group({
            name: [goal.name],
            selected: this.onboarding().goals.includes(goal.name) ? true : [goal.selected],
          }),
        ),
      ),
    });
  }

  get goals() {
    return this.form.get('goals') as FormArray;
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.goals.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one goal';
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const goals = this.goals.controls.filter((control) => control.value.selected).map((control) => control.value.name);

    this._store.dispatch(setClientOnboardingGoals({ goals: goals }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.FitnessExperience }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[1].id,
          title: this.onboardingSteps[1].title,
          description: this.onboardingSteps[1].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: null }));
  }

  resetError() {
    this.error = null;
  }
}
