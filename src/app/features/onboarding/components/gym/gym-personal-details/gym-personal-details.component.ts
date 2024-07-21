import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import {
  setGymOnboardingGymInfo,
  setOnboardingSelectedStep,
  setOnboardingType,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingGymSteps, OnboardingType } from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_GYM } from '@app/features/onboarding/constants/onboarding';
import { selectOnboardingGym } from '@app/features/onboarding/store/onboarding.selectors';
import { GYM_TYPES } from '@app/features/onboarding/constants/gym';
import { GymType } from '@app/features/onboarding/models/gym.model';

@Component({
  selector: 'app-gym-personal-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './gym-personal-details.component.html',
  styleUrl: './gym-personal-details.component.scss',
})
export class GymPersonalDetailsComponent implements OnInit {
  form!: FormGroup;
  gymTypes: GymType[] = GYM_TYPES;
  onboardingSteps = ONBOARDING_GYM;

  onboarding = this._store.selectSignal(selectOnboardingGym);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: [this.onboarding().name ? this.onboarding().name : '', [Validators.required]],
      gymType: [this.onboarding().gymType ? this.onboarding().gymType : '', [Validators.required]],
      activePersonalTrainers: [
        this.onboarding().activePersonalTrainers ? this.onboarding().activePersonalTrainers : '',
        [Validators.required],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(
      setGymOnboardingGymInfo({
        name: this.f['name'].value,
        gymType: this.f['gymType'].value,
        activePersonalTrainers: this.f['activePersonalTrainers'].value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingGymSteps.Contact }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[0].id,
          title: this.onboardingSteps[0].title,
          description: this.onboardingSteps[0].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingType({ onboardingType: OnboardingType.Welcome }));
  }
}
