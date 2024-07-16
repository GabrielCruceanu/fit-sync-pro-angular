import { Component } from '@angular/core';
import { USER_TYPES } from '@app/modules/onboarding/constants/onboarding-steps';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { OnboardingUserType } from '@app/modules/onboarding/models/onboarding-user-type.model';
import { Store } from '@ngrx/store';
import { loadOnboardingSteps, setOnboardingType } from '../../store/onboarding.actions';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  userTypes: OnboardingUserType[] = USER_TYPES;
  selectedUserType: OnboardingUserType | null = null;

  constructor(private _store: Store) {}

  onSelectedUserType(userType: OnboardingUserType) {
    this.selectedUserType = userType;
  }

  setOnboardingType() {
    if (!this.selectedUserType) {
      return;
    }
    this._store.dispatch(setOnboardingType({ onboardingType: this.selectedUserType.type }));
    this._store.dispatch(loadOnboardingSteps({ onboardingType: this.selectedUserType.type }));
  }
}
