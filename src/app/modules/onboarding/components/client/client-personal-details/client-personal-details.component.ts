import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { GENDER_LIST } from '@app/core/constants/gender';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingPersonalDetails,
  setOnboardingSelectedStep,
  setOnboardingType,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingClientSteps, OnboardingType } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding';
import { selectOnboardingClient } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-personal-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './client-personal-details.component.html',
  styleUrl: './client-personal-details.component.scss',
})
export class ClientPersonalDetailsComponent implements OnInit {
  form!: FormGroup;
  genders: string[] = GENDER_LIST;
  onboardingSteps = ONBOARDING_CLIENT;

  onboarding = this._store.selectSignal(selectOnboardingClient);

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
      height: [
        this.onboarding().personalDetails?.height ? this.onboarding().personalDetails?.height : '',
        [Validators.required],
      ],
      weight: [
        this.onboarding().personalDetails?.weight ? this.onboarding().personalDetails?.weight : '',
        [Validators.required],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(setClientOnboardingPersonalDetails({ personalDetails: this.form.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Goals }));
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
