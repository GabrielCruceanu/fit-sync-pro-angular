import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GENDER_LIST } from '@app/core/constants/gender';
import { Store } from '@ngrx/store';
import {
  setNutritionistOnboardingPersonalDetails,
  setOnboardingSelectedStep,
  setOnboardingType,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingNutritionistSteps, OnboardingType } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_NUTRITIONIST } from '@app/modules/onboarding/constants/onboarding';
import { selectOnboardingNutritionist } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-nutritionist-personal-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './nutritionist-personal-details.component.html',
  styleUrl: './nutritionist-personal-details.component.scss',
})
export class NutritionistPersonalDetailsComponent implements OnInit {
  form!: FormGroup;
  genders: string[] = GENDER_LIST;
  onboardingSteps = ONBOARDING_NUTRITIONIST;

  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

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

    this._store.dispatch(setNutritionistOnboardingPersonalDetails({ personalDetails: this.form.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Contact }));
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
