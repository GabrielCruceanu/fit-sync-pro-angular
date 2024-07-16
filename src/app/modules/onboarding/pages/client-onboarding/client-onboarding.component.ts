import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOnboardingCurrentStep } from '@app/modules/onboarding/store/onboarding.selectors';
import { AsyncPipe, NgClass } from '@angular/common';
import { OnboardingClientSteps } from '@app/modules/onboarding/models/onboarding.model';
import { ClientPersonalDetailsComponent } from '@app/modules/onboarding/components/client/client-personal-details/client-personal-details.component';
import { ClientGoalsComponent } from '@app/modules/onboarding/components/client/client-goals/client-goals.component';
import { ClientFoodPreferencesComponent } from '@app/modules/onboarding/components/client/client-food-preferences/client-food-preferences.component';
import { ClientFitnessExperienceComponent } from '@app/modules/onboarding/components/client/client-fitness-experience/client-fitness-experience.component';
import { ClientTrainingLocationComponent } from '@app/modules/onboarding/components/client/client-training-location/client-training-location.component';
import { ClientAvailabilityComponent } from '@app/modules/onboarding/components/client/client-availability/client-availability.component';
import { ClientLocationComponent } from '@app/modules/onboarding/components/client/client-location/client-location.component';
import { ClientOverviewComponent } from '@app/modules/onboarding/components/client/client-overview/client-overview.component';

@Component({
  selector: 'app-client-onboarding',
  standalone: true,
  imports: [
    AsyncPipe,
    ClientPersonalDetailsComponent,
    ClientGoalsComponent,
    ClientFoodPreferencesComponent,
    ClientFitnessExperienceComponent,
    ClientTrainingLocationComponent,
    ClientAvailabilityComponent,
    ClientLocationComponent,
    ClientOverviewComponent,
    NgClass,
  ],
  templateUrl: './client-onboarding.component.html',
  styleUrl: './client-onboarding.component.scss',
})
export class ClientOnboardingComponent {
  onboardingCurrentStep = this._store.selectSignal(selectOnboardingCurrentStep);
  clientOnboardingSteps = OnboardingClientSteps;

  constructor(private _store: Store) {}
}
