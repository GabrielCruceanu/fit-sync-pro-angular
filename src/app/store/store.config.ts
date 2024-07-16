import { authReducer } from '@app/modules/auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@app/store/app.state';
import { onboardingReducer } from '@app/modules/onboarding/store/onboarding.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  onboarding: onboardingReducer,
};
