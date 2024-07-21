import { OnboardingState } from '@app/features/onboarding/store/onboarding.reducer';
import { AuthState } from '@app/auth/store/auth.state';

export enum Features {
  Auth = 'auth',
  User = 'user',
  Onboarding = 'onboarding',
}

export interface AppState {
  auth: AuthState;
  onboarding: OnboardingState;
}
