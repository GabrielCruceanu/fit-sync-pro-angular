import { Component } from '@angular/core';
import { LocationService } from '@app/core/services/location.service';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_NUTRITIONIST } from '@app/modules/onboarding/constants/onboarding';
import {
  setNutritionistOnboardingLocation,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingNutritionistSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingNutritionist } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-nutritionist-location',
  standalone: true,
  imports: [NgForOf, JsonPipe, ReactiveFormsModule, ButtonComponent, NgClass, NgIf],
  templateUrl: './nutritionist-location.component.html',
  styleUrl: './nutritionist-location.component.scss',
})
export class NutritionistLocationComponent {
  onboardingSteps = ONBOARDING_NUTRITIONIST;
  form!: FormGroup;
  countries = this._locationService.getCountries();
  counties = this._locationService.getCounties();
  cities = this._locationService.getCities();

  onboarding = this._store.selectSignal(selectOnboardingNutritionist);

  constructor(
    private _locationService: LocationService,
    private _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      country: [this.onboarding().country ? this.onboarding().country : '', Validators.required],
      county: [this.onboarding().county ? this.onboarding().county : '', Validators.required],
      city: [this.onboarding().city ? this.onboarding().city : '', Validators.required],
      fullStreet: [this.onboarding().fullStreet ? this.onboarding().fullStreet : '', Validators.required],
      cabinetName: [this.onboarding().cabinetName ? this.onboarding().cabinetName : '', Validators.required],
    });
  }

  get country() {
    return this.form.controls['country'];
  }

  get county() {
    return this.form.controls['county'];
  }

  get city() {
    return this.form.controls['city'];
  }

  get fullStreet() {
    return this.form.controls['fullStreet'];
  }

  get cabinetName() {
    return this.form.controls['cabinetName'];
  }

  fillCounties(country: string) {
    this._locationService.fillCounties(country);
  }

  fillCities(county: string) {
    this._locationService.fillCities(county);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this._store.dispatch(
      setNutritionistOnboardingLocation({
        country: this.country.value,
        county: this.county.value,
        city: this.city.value,
        fullStreet: this.fullStreet.value,
        cabinetName: this.cabinetName.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Overview }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[5].id,
          title: this.onboardingSteps[5].title,
          description: this.onboardingSteps[5].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingNutritionistSteps.Availability }));
  }
}
