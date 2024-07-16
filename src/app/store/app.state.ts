import { AuthState } from '@app/modules/auth/store/auth.state';
import { OnboardingState } from '@app/modules/onboarding/store/onboarding.reducer';

export enum Features {
  Auth = 'auth',
  User = 'user',
  Onboarding = 'onboarding',
}

export interface AppState {
  auth: AuthState;
  onboarding: OnboardingState;
}
