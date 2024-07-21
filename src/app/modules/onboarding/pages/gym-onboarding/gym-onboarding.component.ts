import { Component } from '@angular/core';
import { selectOnboardingCurrentStep } from '@app/modules/onboarding/store/onboarding.selectors';
import { OnboardingGymSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { GymPersonalDetailsComponent } from '@app/modules/onboarding/components/gym/gym-personal-details/gym-personal-details.component';
import { GymContactDetailsComponent } from '@app/modules/onboarding/components/gym/gym-contact-details/gym-contact-details.component';
import { GymAvailabilityComponent } from '@app/modules/onboarding/components/gym/gym-availability/gym-availability.component';
import { GymLocationComponent } from '@app/modules/onboarding/components/gym/gym-location/gym-location.component';
import { GymOverviewComponent } from '@app/modules/onboarding/components/gym/gym-overview/gym-overview.component';

@Component({
  selector: 'app-gym-onboarding',
  standalone: true,
  imports: [
    GymPersonalDetailsComponent,
    GymContactDetailsComponent,
    GymAvailabilityComponent,
    GymLocationComponent,
    GymOverviewComponent,
  ],
  templateUrl: './gym-onboarding.component.html',
  styleUrl: './gym-onboarding.component.scss',
})
export class GymOnboardingComponent {
  onboardingCurrentStep = this._store.selectSignal(selectOnboardingCurrentStep);
  gymOnboardingSteps = OnboardingGymSteps;

  constructor(private _store: Store) {}
}
