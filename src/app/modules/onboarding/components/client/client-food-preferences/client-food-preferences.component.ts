import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { CLIENT_FOOD_ALLERGIES, CLIENT_FOOD_PREFERENCES } from '@app/core/constants/client';
import { OnboardingClientSteps, OnboardingStep } from '@app/modules/onboarding/models/onboarding.model';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding-steps';
import { Store } from '@ngrx/store';
import {
  setClientOnboardingFoodPreferences,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { SvgIconComponent } from 'angular-svg-icon';
import { selectOnboardingClient } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-food-preferences',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgIf, ReactiveFormsModule, SvgIconComponent, NgForOf],
  templateUrl: './client-food-preferences.component.html',
  styleUrl: './client-food-preferences.component.scss',
})
export class ClientFoodPreferencesComponent {
  form!: FormGroup;
  foodPreferences = CLIENT_FOOD_PREFERENCES;
  foodAllergies = CLIENT_FOOD_ALLERGIES;
  isAllergicValue = false;
  allergies: string[] = [];
  onboardingSteps: OnboardingStep[] = ONBOARDING_CLIENT;
  error: string | null = null;

  onboarding = this._store.selectSignal(selectOnboardingClient);

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      foods: this._formBuilder.array(
        this.foodPreferences.map((food) =>
          this._formBuilder.group({
            name: [food.name],
            selected: this.onboarding().foodPreferences.includes(food.name) ? true : [food.selected],
          }),
        ),
      ),
      isAllergic: [this.onboarding().isAllergic],
    });

    this.isAllergicValue = this.onboarding().isAllergic;
    this.allergies = this.onboarding().allergies.length > 0 ? this.onboarding().allergies : [];
  }

  get foods() {
    return this.form.get('foods') as FormArray;
  }

  get isAllergic() {
    return this.form.get('isAllergic');
  }

  setAllergic(value: boolean) {
    this.isAllergicValue = value;
    this.isAllergic?.setValue(value);
  }

  setAllergies(value: string) {
    if (this.allergies.includes(value)) {
      this.allergies = this.allergies.filter((allergy) => allergy !== value);
      return;
    }
    this.allergies.push(value);
  }

  onSubmit() {
    if (this.foods.controls.every((control) => !control.value.selected)) {
      this.error = 'Please select at least one food preference';
      return;
    }
    if (this.isAllergic?.value && this.allergies.length === 0) {
      this.error = 'Please select at least one food allergy';
      return;
    }

    const foods = this.foods.controls.filter((control) => control.value.selected).map((control) => control.value.name);

    this._store.dispatch(
      setClientOnboardingFoodPreferences({
        foodPreferences: foods,
        isAllergic: this.isAllergic?.value,
        allergies: this.allergies,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Availability }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[4].id,
          title: this.onboardingSteps[4].title,
          description: this.onboardingSteps[4].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.TrainingLocation }));
  }

  resetError() {
    this.error = null;
  }
}
