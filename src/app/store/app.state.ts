import { AuthState } from '@app/modules/auth/store/auth.state';

export enum Features {
  Auth = 'auth',
  User = 'user',
  Onboarding = 'onboarding',
}

export interface AppState {
  auth: AuthState;
}
