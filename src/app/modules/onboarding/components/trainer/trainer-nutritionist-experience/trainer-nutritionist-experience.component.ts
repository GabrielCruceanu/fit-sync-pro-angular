import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { OnboardingStep, OnboardingTrainerSteps } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_TRAINER } from '@app/modules/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingNutritionistDetails,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingTrainer } from '@app/modules/onboarding/store/onboarding.selectors';
import { NUTRITIONIST_EXPERIENCE, NUTRITIONIST_TYPES } from '@app/modules/onboarding/constants/nutritionist';
import { CLIENT_FOOD_PREFERENCES } from '@app/modules/onboarding/constants/client';

@Component({
  selector: 'app-trainer-nutritionist-experience',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf, NgClass],
  templateUrl: './trainer-nutritionist-experience.component.html',
  styleUrl: './trainer-nutritionist-experience.component.scss',
})
export class TrainerNutritionistExperienceComponent {
  form!: FormGroup;
  nutritionistTypes = NUTRITIONIST_TYPES;
  yearsOfExperience = NUTRITIONIST_EXPERIENCE;
  onboardingSteps: OnboardingStep[] = ONBOARDING_TRAINER;
  foodPreferences = CLIENT_FOOD_PREFERENCES;
  isNutritionistValue = false;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingTrainer);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      isNutritionist: [this.onboarding().isNutritionist, Validators.required],
      nutritionistType: [this.onboarding().nutritionistType],
      nutritionistExperience: [this.onboarding().nutritionistExperience],
      nutritionistDiets: this._formBuilder.array(
        this.foodPreferences.map((food) =>
          this._formBuilder.group({
            name: [food.name],
            selected: this.onboarding().nutritionistDiets.includes(food.name) ? true : [food.selected],
          }),
        ),
      ),
    });
    this.isNutritionistValue = this.onboarding().isNutritionist;
  }

  get isNutritionist() {
    return this.form.get('isNutritionist');
  }

  get nutritionistType() {
    return this.form.get('nutritionistType');
  }

  get nutritionistExperience() {
    return this.form.get('nutritionistExperience');
  }

  get nutritionistDiets() {
    return this.form.get('nutritionistDiets') as FormArray;
  }

  setIsNutritionist(value: boolean) {
    this.isNutritionistValue = value;
    this.isNutritionist?.setValue(value);
  }

  onSubmit() {
    if (this.isNutritionist?.value && this.nutritionistType?.value === null) {
      this.error = 'Please select a nutritionist type';
      this.nutritionistType.markAllAsTouched();
      this.nutritionistType.setErrors({ required: true });
      return;
    }
    if (this.isNutritionist?.value && this.nutritionistExperience?.value === '') {
      this.error = 'Please select a nutritionist experience';
      this.nutritionistExperience.markAllAsTouched();
      this.nutritionistExperience.setErrors({ required: true });
      return;
    }
    if (this.isNutritionist?.value && this.nutritionistDiets.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one diet';
      this.nutritionistDiets.markAllAsTouched();
      this.nutritionistDiets.setErrors({ required: true });
      return;
    }

    this._store.dispatch(
      setTrainerOnboardingNutritionistDetails({
        isNutritionist: this.isNutritionist?.value,
        nutritionistType: this.nutritionistType?.value,
        nutritionistExperience: this.nutritionistExperience?.value,
        nutritionistDiets: this.nutritionistDiets.controls
          .filter((control) => control.value.selected)
          .map((control) => control.value.name),
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.FitnessExperience }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Contact }));
  }

  resetError() {
    this.error = null;
  }
}
