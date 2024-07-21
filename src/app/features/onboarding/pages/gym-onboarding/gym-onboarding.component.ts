import { Component } from '@angular/core';
import { selectOnboardingCurrentStep } from '@app/features/onboarding/store/onboarding.selectors';
import { OnboardingGymSteps } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { GymPersonalDetailsComponent } from '@app/features/onboarding/components/gym/gym-personal-details/gym-personal-details.component';
import { GymContactDetailsComponent } from '@app/features/onboarding/components/gym/gym-contact-details/gym-contact-details.component';
import { GymAvailabilityComponent } from '@app/features/onboarding/components/gym/gym-availability/gym-availability.component';
import { GymLocationComponent } from '@app/features/onboarding/components/gym/gym-location/gym-location.component';
import { GymOverviewComponent } from '@app/features/onboarding/components/gym/gym-overview/gym-overview.component';

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
