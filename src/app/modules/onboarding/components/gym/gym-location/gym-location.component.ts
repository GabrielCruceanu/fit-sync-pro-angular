import { Component } from '@angular/core';
import { LocationService } from '@app/core/services/location.service';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_GYM } from '@app/modules/onboarding/constants/onboarding';
import {
  setGymOnboardingLocation,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingGymSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingNutritionist } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-gym-location',
  standalone: true,
  imports: [NgForOf, JsonPipe, ReactiveFormsModule, ButtonComponent, NgClass, NgIf],
  templateUrl: './gym-location.component.html',
  styleUrl: './gym-location.component.scss',
})
export class GymLocationComponent {
  onboardingSteps = ONBOARDING_GYM;
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
      setGymOnboardingLocation({
        country: this.country.value,
        county: this.county.value,
        city: this.city.value,
        fullStreet: this.fullStreet.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingGymSteps.Overview }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[3].id,
          title: this.onboardingSteps[3].title,
          description: this.onboardingSteps[3].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingGymSteps.Availability }));
  }
}
