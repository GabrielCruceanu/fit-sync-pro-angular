import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingContactDetails,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingTrainerSteps } from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_TRAINER } from '@app/features/onboarding/constants/onboarding';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';
import { GENDER_LIST } from '@app/core/constants/gender';
import { PhoneNumberService } from '@app/shared/services/phone-number/phone-number.service';

@Component({
  selector: 'app-trainer-contact-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass, ButtonComponent],
  templateUrl: './trainer-contact-details.component.html',
  styleUrl: './trainer-contact-details.component.scss',
})
export class TrainerContactDetailsComponent implements OnInit {
  form!: FormGroup;
  onboardingSteps = ONBOARDING_TRAINER;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);
  protected readonly genders = GENDER_LIST;

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

    this._store.dispatch(setTrainerOnboardingContactDetails({ contactDetails: this.form.value }));
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.NutritionExperience }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.PersonalDetails }));
  }
}
