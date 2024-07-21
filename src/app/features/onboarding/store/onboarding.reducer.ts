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
} from '@app/features/onboarding/models/onboarding.model';
import { OnboardingClient } from '@app/features/onboarding/models/client.model';
import { OnboardingTrainer } from '@app/features/onboarding/models/trainer.model';
import { OnboardingNutritionist } from '@app/features/onboarding/models/nutritionist.model';
import { OnboardingGym } from '@app/features/onboarding/models/gym.model';

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
  trainer: OnboardingTrainer;
  nutritionist: OnboardingNutritionist;
  gym: OnboardingGym;
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
  trainer: {
    personalDetails: null,
    contactDetails: null,
    isNutritionist: false,
    nutritionistType: null,
    nutritionistExperience: '',
    nutritionistDiets: [],
    trainerType: null,
    trainingExperience: '',
    trainingLocation: [],
    trainingOnline: [],
    trainingInPerson: [],
    availabilityDays: [],
    availabilityTimes: [],
    country: '',
    county: '',
    city: '',
    fullStreet: '',
    gymName: '',
  },
  nutritionist: {
    personalDetails: null,
    contactDetails: null,
    nutritionistType: null,
    nutritionistExperience: '',
    nutritionistDiets: [],
    consultingLocation: [],
    availabilityDays: [],
    availabilityTimes: [],
    country: '',
    county: '',
    city: '',
    fullStreet: '',
    cabinetName: '',
  },
  gym: {
    name: '',
    gymType: '',
    activePersonalTrainers: '',
    contactDetails: null,
    availabilityDays: [],
    availabilityTimes: [],
    country: '',
    county: '',
    city: '',
    fullStreet: '',
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
  on(OnboardingActions.setTrainerOnboardingPersonalDetails, (state, { personalDetails }) => ({
    ...state,
    trainer: {
      ...state.trainer,
      personalDetails,
    },
  })),
  on(OnboardingActions.setTrainerOnboardingContactDetails, (state, { contactDetails }) => ({
    ...state,
    trainer: {
      ...state.trainer,
      contactDetails,
    },
  })),
  on(
    OnboardingActions.setTrainerOnboardingNutritionistDetails,
    (state, { isNutritionist, nutritionistType, nutritionistExperience, nutritionistDiets }) => ({
      ...state,
      trainer: {
        ...state.trainer,
        isNutritionist,
        nutritionistType,
        nutritionistExperience,
        nutritionistDiets,
      },
    }),
  ),
  on(OnboardingActions.setTrainerOnboardingFitnessExperience, (state, { trainerType, trainingExperience }) => ({
    ...state,
    trainer: {
      ...state.trainer,
      trainerType,
      trainingExperience,
    },
  })),
  on(
    OnboardingActions.setTrainerOnboardingTrainingLocation,
    (state, { trainingLocation, trainingOnline, trainingInPerson }) => ({
      ...state,
      trainer: {
        ...state.trainer,
        trainingLocation,
        trainingOnline,
        trainingInPerson,
      },
    }),
  ),
  on(OnboardingActions.setTrainerOnboardingAvailability, (state, { availability }) => ({
    ...state,
    trainer: {
      ...state.trainer,
      availabilityDays: availability.days,
      availabilityTimes: availability.times,
    },
  })),
  on(OnboardingActions.setTrainerOnboardingLocation, (state, { country, county, city, fullStreet, gymName }) => ({
    ...state,
    trainer: {
      ...state.trainer,
      country,
      county,
      city,
      fullStreet,
      gymName,
    },
  })),
  on(OnboardingActions.completeOnboardingTrainer, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnboardingActions.completeOnboardingTrainerSuccess, (state) => ({
    ...state,
    loading: false,
    completed: true,
  })),
  on(OnboardingActions.completeOnboardingTrainerFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(OnboardingActions.setNutritionistOnboardingPersonalDetails, (state, { personalDetails }) => ({
    ...state,
    nutritionist: {
      ...state.nutritionist,
      personalDetails,
    },
  })),
  on(OnboardingActions.setNutritionistOnboardingContactDetails, (state, { contactDetails }) => ({
    ...state,
    nutritionist: {
      ...state.nutritionist,
      contactDetails,
    },
  })),
  on(
    OnboardingActions.setNutritionistOnboardingNutritionExperience,
    (state, { nutritionistType, nutritionistExperience, nutritionistDiets }) => ({
      ...state,
      nutritionist: {
        ...state.nutritionist,
        nutritionistType,
        nutritionistExperience,
        nutritionistDiets,
      },
    }),
  ),
  on(OnboardingActions.setNutritionistOnboardingConsultingLocation, (state, { consultingLocation }) => ({
    ...state,
    nutritionist: {
      ...state.nutritionist,
      consultingLocation,
    },
  })),
  on(OnboardingActions.setNutritionistOnboardingAvailability, (state, { availability }) => ({
    ...state,
    nutritionist: {
      ...state.nutritionist,
      availabilityDays: availability.days,
      availabilityTimes: availability.times,
    },
  })),
  on(
    OnboardingActions.setNutritionistOnboardingLocation,
    (state, { country, county, city, fullStreet, cabinetName }) => ({
      ...state,
      nutritionist: {
        ...state.nutritionist,
        country,
        county,
        city,
        fullStreet,
        cabinetName,
      },
    }),
  ),
  on(OnboardingActions.completeOnboardingNutritionist, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnboardingActions.completeOnboardingNutritionistSuccess, (state) => ({
    ...state,
    loading: false,
    completed: true,
  })),
  on(OnboardingActions.completeOnboardingNutritionistFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(OnboardingActions.setGymOnboardingGymInfo, (state, { name, gymType, activePersonalTrainers }) => ({
    ...state,
    gym: {
      ...state.gym,
      name,
      gymType,
      activePersonalTrainers,
    },
  })),
  on(OnboardingActions.setOnboardingGymContactDetails, (state, { contactDetails }) => ({
    ...state,
    gym: {
      ...state.gym,
      contactDetails,
    },
  })),
  on(OnboardingActions.setGymOnboardingAvailability, (state, { availability }) => ({
    ...state,
    gym: {
      ...state.gym,
      availabilityDays: availability.days,
      availabilityTimes: availability.times,
    },
  })),
  on(OnboardingActions.setGymOnboardingLocation, (state, { country, county, city, fullStreet }) => ({
    ...state,
    gym: {
      ...state.gym,
      country,
      county,
      city,
      fullStreet,
    },
  })),
  on(OnboardingActions.completeOnboardingGym, (state) => ({
    ...state,
    loading: true,
  })),
  on(OnboardingActions.completeOnboardingGymSuccess, (state) => ({
    ...state,
    loading: false,
    completed: true,
  })),
  on(OnboardingActions.completeOnboardingGymFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);

export const { selectAll, selectEntities } = adapter.getSelectors();
