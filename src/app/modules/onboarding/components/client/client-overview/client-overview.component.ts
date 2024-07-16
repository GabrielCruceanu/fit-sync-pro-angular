import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ONBOARDING_CLIENT } from '@app/modules/onboarding/constants/onboarding-steps';
import {
  completeOnboardingClient,
  setOnboardingSelectedStep,
  updateOnboardingStep,
} from '@app/modules/onboarding/store/onboarding.actions';
import { OnboardingClientSteps } from '@app/modules/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectOnboardingClient } from '@app/modules/onboarding/store/onboarding.selectors';

@Component({
  selector: 'app-client-overview',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './client-overview.component.html',
  styleUrl: './client-overview.component.scss',
})
export class ClientOverviewComponent {
  onboardingSteps = ONBOARDING_CLIENT;
  onboarding = this._store.selectSignal(selectOnboardingClient);

  constructor(private _store: Store) {}

  onSubmit() {
    this._store.dispatch(
      updateOnboardingStep({
        step: {
          id: this.onboardingSteps[7].id,
          title: this.onboardingSteps[7].title,
          description: this.onboardingSteps[7].description,
          completed: true,
        },
      }),
    );
    this._store.dispatch(completeOnboardingClient({ clientData: this.onboarding() }));
  }

  onBack() {
    this._store.dispatch(setOnboardingSelectedStep({ step: OnboardingClientSteps.Availability }));
  }
}
