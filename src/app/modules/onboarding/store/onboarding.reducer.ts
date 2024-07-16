import { createReducer, on } from '@ngrx/store';
import * as OnboardingActions from './onboarding.actions';
import { ResponseError } from '../models/response-error.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  OnboardingClientSteps,
  OnboardingGymSteps,
  OnboardingNutritionistSteps,
  OnboardingStep,
  OnboardingTrainerSteps,
  OnboardingType,
} from '@app/modules/onboarding/models/onboarding.model';
import { ClientOnboardingPersonalDetails } from '@app/modules/onboarding/models/client-onboarding-data.model';

export interface OnboardingClient {
  personalDetails: ClientOnboardingPersonalDetails | null;
  goals: string[];
  fitnessExperience: string;
  trainingLocation: string;
  howToTrain: string;
  foodPreferences: string[];
  isAllergic: boolean;
  allergies: string[];
  availabilityDays: string[];
  availabilityTimes: string[];
  country: string;
  county: string;
  city: string;
}

export interface OnboardingState extends EntityState<OnboardingStep> {
  error: ResponseError | null;
  loading: boolean;
  completed: boolean;
  selectedStep:
    | OnboardingClientSteps
    | OnboardingTrainerSteps
    | OnboardingNutritionistSteps
    | OnboardingGymSteps
    | null;
  type: OnboardingType;
  client: OnboardingClient;
}

export const adapter: EntityAdapter<OnboardingStep> = createEntityAdapter<OnboardingStep>();

export const initialState: OnboardingState = adapter.getInitialState({
  error: null,
  loading: false,
  completed: false,
  selectedStep: null,
  type: OnboardingType.Welcome,
  client: {
    personalDetails: null,
    goals: [],
    fitnessExperience: '',
    trainingLocation: '',
    howToTrain: '',
    foodPreferences: [],
    isAllergic: false,
    allergies: [],
    availabilityDays: [],
    availabilityTimes: [],
    country: '',
    county: '',
    city: '',
  },
});

export const onboardingReducer = createReducer(
  initialState,
  on(OnboardingActions.setOnboardingType, (state, { onboardingType }) => ({
    ...state,
    type: onboardingType,
  })),
  on(OnboardingActions.setOnboardingSelectedStep, (state, { step }) => ({
    ...state,
    selectedStep: step,
  })),
  on(OnboardingActions.loadOnboardingSteps, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnboardingActions.loadOnboardingStepsSuccess, (state, { steps }) =>
    adapter.setAll(steps, {
      ...state,
      loading: false,
    }),
  ),
  on(OnboardingActions.addOnboardingStep, (state, { step }) => ({
    ...state,
    step,
  })),
  on(OnboardingActions.updateOnboardingStep, (state, { step }) =>
    adapter.updateOne(
      {
        id: step.id,
        changes: step,
      },
      state,
    ),
  ),
  on(OnboardingActions.deleteOnboardingStep, (state, { id }) => adapter.removeOne(id, state)),
  on(OnboardingActions.setClientOnboardingPersonalDetails, (state, { personalDetails }) => ({
    ...state,
    client: {
      ...state.client,
      personalDetails,
    },
  })),
  on(OnboardingActions.setClientOnboardingGoals, (state, { goals }) => ({
    ...state,
    client: {
      ...state.client,
      goals,
    },
  })),
  on(OnboardingActions.setClientOnboardingFitnessExperience, (state, { fitnessExperience }) => ({
    ...state,
    client: {
      ...state.client,
      fitnessExperience,
    },
  })),
  on(OnboardingActions.setClientOnboardingTrainingLocation, (state, { trainingLocation, howToTrain }) => ({
    ...state,
    client: {
      ...state.client,
      trainingLocation,
      howToTrain,
    },
  })),
  on(OnboardingActions.setClientOnboardingFoodPreferences, (state, { foodPreferences, isAllergic, allergies }) => ({
    ...state,
    client: {
      ...state.client,
      foodPreferences,
      isAllergic,
      allergies,
    },
  })),
  on(OnboardingActions.setClientOnboardingAvailability, (state, { availability }) => ({
    ...state,
    client: {
      ...state.client,
      availabilityDays: availability.days,
      availabilityTimes: availability.times,
    },
  })),
  on(OnboardingActions.setClientOnboardingLocation, (state, { country, county, city }) => ({
    ...state,
    client: {
      ...state.client,
      country,
      county,
      city,
    },
  })),
  on(OnboardingActions.completeOnboardingClient, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnboardingActions.completeOnboardingClientSuccess, (state) => ({
    ...state,
    loading: false,
    completed: true,
  })),
  on(OnboardingActions.completeOnboardingClientFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);

export const { selectAll, selectEntities } = adapter.getSelectors();
