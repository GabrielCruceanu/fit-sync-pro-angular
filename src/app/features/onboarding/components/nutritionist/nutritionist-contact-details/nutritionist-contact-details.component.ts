import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import {
  setNutritionistOnboardingContactDetails,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingNutritionistSteps } from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_NUTRITIONIST } from '@app/features/onboarding/constants/onboarding';
import { selectOnboardingNutritionist } from '@app/features/onboarding/store/onboarding.selectors';
import { PhoneNumberService } from '@app/shared/services/phone-number/phone-number.service';

@Component({
  selector: 'app-nutritionist-contact-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './nutritionist-contact-details.component.html',
  styleUrl: './nutritionist-contact-details.component.scss',
})
export class NutritionistContactDetailsComponent implements OnInit {
  form!: FormGroup;
  onboardingSteps = ONBOARDING_NUTRITIONIST;

  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
    private _phoneNumberService: PhoneNumberService,
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      phone: [this.onboarding().contactDetails?.phone ? this.onboarding().contactDetails?.phone : '', []],
      website: [this.onboarding().contactDetails?.website ? this.onboarding().contactDetails?.website : '', []],
      facebook: [this.onboarding().contactDetails?.facebook ? this.onboarding().contactDetails?.facebook : '', []],
      instagram: [this.onboarding().contactDetails?.instagram ? this.onboarding().contactDetails?.instagram : '', []],
      linkedin: [this.onboarding().contactDetails?.linkedin ? this.onboarding().contactDetails?.linkedin : '', []],
      twitter: [this.onboarding().contactDetails?.twitter ? this.onboarding().contactDetails?.twitter : '', []],
    });
  }

  clearNumber() {
    const phoneNumber = this.form.controls['phone'].value;
    if (phoneNumber === '') {
      return;
    }
    const clearNumber = this._phoneNumberService.cleanPhoneNumber(phoneNumber);

    this.form.controls['phone'].setValue(clearNumber);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(setNutritionistOnboardingContactDetails({ contactDetails: this.form.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.NutritionExperience }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.PersonalDetails }));
  }
}
