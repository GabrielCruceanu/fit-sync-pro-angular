import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GENDER_LIST } from '@app/core/constants/gender';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setOnboardingType,
  setTrainerOnboardingPersonalDetails,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingTrainerSteps, OnboardingType } from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_TRAINER } from '@app/features/onboarding/constants/onboarding';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-trainer-personal-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './trainer-personal-details.component.html',
  styleUrl: './trainer-personal-details.component.scss',
})
export class TrainerPersonalDetailsComponent implements OnInit {
  form!: FormGroup;
  genders: string[] = GENDER_LIST;
  onboardingSteps = ONBOARDING_TRAINER;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      firstName: [
        this.onboarding().personalDetails?.firstName ? this.onboarding().personalDetails?.firstName : '',
        [Validators.required],
      ],
      lastName: [
        this.onboarding().personalDetails?.lastName ? this.onboarding().personalDetails?.lastName : '',
        [Validators.required],
      ],
      birthDate: [
        this.onboarding().personalDetails?.birthDate ? this.onboarding().personalDetails?.birthDate : '',
        [Validators.required],
      ],
      gender: [
        this.onboarding().personalDetails?.gender ? this.onboarding().personalDetails?.gender : '',
        [Validators.required],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(setTrainerOnboardingPersonalDetails({ personalDetails: this.form.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Contact }));
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
