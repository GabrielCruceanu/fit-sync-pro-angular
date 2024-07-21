import { authReducer } from '@app/auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@app/store/app.state';
import { onboardingReducer } from '@app/features/onboarding/store/onboarding.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  onboarding: onboardingReducer,
};
