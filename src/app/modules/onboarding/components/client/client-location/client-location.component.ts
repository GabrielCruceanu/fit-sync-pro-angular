import { Component } from '@angular/core';
import { LocationService } from '@app/core/services/location.service';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding-steps';
import {
  setClientOnboardingLocation,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingClientSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-client-location',
  standalone: true,
  imports: [NgForOf, JsonPipe, ReactiveFormsModule, ButtonComponent, NgClass, NgIf],
  templateUrl: './client-location.component.html',
  styleUrl: './client-location.component.scss',
})
export class ClientLocationComponent {
  onboardingSteps = ONBOARDING_CLIENT;
  form!: FormGroup;
  public countries = this._locationService.getCountries();
  public counties = this._locationService.getCounties();
  public cities = this._locationService.getCities();

  constructor(
    private _locationService: LocationService,
    private _formBuilder: FormBuilder,
    private _store: Store,
  ) {
    this.form = this._formBuilder.group({
      country: ['', Validators.required],
      county: ['', Validators.required],
      city: ['', Validators.required],
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
      setClientOnboardingLocation({
        country: this.country.value,
        county: this.county.value,
        city: this.city.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Overview }));
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[6].id,
          title: this.onboardingSteps[6].title,
          description: this.onboardingSteps[6].description,
          completed: true,
        },
      }),
    );
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Availability }));
  }
}
