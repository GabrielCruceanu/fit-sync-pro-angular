import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OnboardingState, selectAll } from './onboarding.reducer';

export const selectOnboardingState = createFeatureSelector<OnboardingState>('onboarding');

export const selectOnboardingType = createSelector(selectOnboardingState, (state: OnboardingState) => state.type);

export const selectOnboardingClient = createSelector(selectOnboardingState, (state: OnboardingState) => state.client);

export const selectOnboardingTrainer = createSelector(selectOnboardingState, (state: OnboardingState) => state.trainer);

export const selectOnboardingNutritionist = createSelector(selectOnboardingState, (state) => state.nutritionist);

export const selectOnboardingGym = createSelector(selectOnboardingState, (state) => state.gym);

export const selectOnboardingLoading = createSelector(selectOnboardingState, (state: OnboardingState) => state.loading);

export const selectOnboardingError = createSelector(selectOnboardingState, (state: OnboardingState) => state.error);

export const selectOnboardingCompleted = createSelector(
  selectOnboardingState,
  (state: OnboardingState) => state.completed,
);
export const selectAllOnboardingSteps = createSelector(selectOnboardingState, selectAll);

export const selectOnboardingStep = (id: number) =>
  createSelector(selectAllOnboardingSteps, (steps) => steps.find((step) => step.id === id));

export const selectOnboardingCurrentStep = createSelector(selectOnboardingState, (state) => state.selectedStep);
