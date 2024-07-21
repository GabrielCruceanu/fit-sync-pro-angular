import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { OnboardingNutritionistSteps, OnboardingStep } from '@app/features/onboarding/models/onboarding.model';
import { ONBOARDING_NUTRITIONIST } from '@app/features/onboarding/constants/onboarding';
import { Store } from '@ngrx/store';
import {
  setNutritionistOnboardingNutritionExperience,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingNutritionist } from '@app/features/onboarding/store/onboarding.selectors';
import { NUTRITIONIST_EXPERIENCE, NUTRITIONIST_TYPES } from '@app/features/onboarding/constants/nutritionist';
import { CLIENT_FOOD_PREFERENCES } from '@app/features/onboarding/constants/client';

@Component({
  selector: 'app-nutritionist-experience',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf, NgClass],
  templateUrl: './nutritionist-experience.component.html',
  styleUrl: './nutritionist-experience.component.scss',
})
export class NutritionistExperienceComponent {
  form!: FormGroup;
  nutritionistTypes = NUTRITIONIST_TYPES;
  yearsOfExperience = NUTRITIONIST_EXPERIENCE;
  onboardingSteps: OnboardingStep[] = ONBOARDING_NUTRITIONIST;
  foodPreferences = CLIENT_FOOD_PREFERENCES;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
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

  onSubmit() {
    if (this.nutritionistType?.value === null) {
      this.error = 'Please select a nutritionist type';
      this.nutritionistType.markAllAsTouched();
      this.nutritionistType.setErrors({ required: true });
      return;
    }
    if (this.nutritionistExperience?.value === '') {
      this.error = 'Please select a nutritionist experience';
      this.nutritionistExperience.markAllAsTouched();
      this.nutritionistExperience.setErrors({ required: true });
      return;
    }
    if (this.nutritionistDiets.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one diet';
      this.nutritionistDiets.markAllAsTouched();
      this.nutritionistDiets.setErrors({ required: true });
      return;
    }

    this._store.dispatch(
      setNutritionistOnboardingNutritionExperience({
        nutritionistType: this.nutritionistType?.value,
        nutritionistExperience: this.nutritionistExperience?.value,
        nutritionistDiets: this.nutritionistDiets.controls
          .filter((control) => control.value.selected)
          .map((control) => control.value.name),
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.ConsultingLocation }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Contact }));
  }

  resetError() {
    this.error = null;
  }
}
