import { Component } from '@angular/core';
import { LocationService } from '@app/core/services/location.service';
import { JsonPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_TRAINER } from '@app/features/onboarding/constants/onboarding';
import {
  setOnboardingSelectedStep,
  setTrainerOnboardingLocation,
  updateOnboardingStep,
} from '@app/features/onboarding/store/onboarding.actions';
import { OnboardingTrainerSteps } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingTrainer } from '@app/features/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-trainer-location',
  standalone: true,
  imports: [NgForOf, JsonPipe, ReactiveFormsModule, ButtonComponent, NgClass, NgIf],
  templateUrl: './trainer-location.component.html',
  styleUrl: './trainer-location.component.scss',
})
export class TrainerLocationComponent {
  onboardingSteps = ONBOARDING_TRAINER;
  form!: FormGroup;
  countries = this._locationService.getCountries();
  counties = this._locationService.getCounties();
  cities = this._locationService.getCities();

  onboarding = this._store.selectSignal(selectOnboardingTrainer);

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
      gymName: [this.onboarding().gymName ? this.onboarding().gymName : '', Validators.required],
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

  get gymName() {
    return this.form.controls['gymName'];
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
      setTrainerOnboardingLocation({
        country: this.country.value,
        county: this.county.value,
        city: this.city.value,
        fullStreet: this.fullStreet.value,
        gymName: this.gymName.value,
      }),
    );
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Overview }));
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
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingTrainerSteps.Availability }));
  }
}
