import { createAction, props } from '@ngrx/store';
import { ResponseError } from '../models/response-error.model';
import {
  OnboardingClientSteps,
  OnboardingContactDetails,
  OnboardingGymSteps,
  OnboardingNutritionistSteps,
  OnboardingPersonalDetails,
  OnboardingStep,
  OnboardingTrainerSteps,
  OnboardingType,
} from '@app/features/onboarding/models/onboarding.model';
import { ClientOnboardingPersonalDetails, OnboardingClient } from '@app/features/onboarding/models/client.model';
import { NutritionistType, OnboardingNutritionist } from '@app/features/onboarding/models/nutritionist.model';
import { OnboardingTrainer, TrainerType } from '@app/features/onboarding/models/trainer.model';
import { OnboardingGym } from '@app/features/onboarding/models/gym.model';

export const setOnboardingType = createAction(
  '[Onboarding] Set Onboarding Type',
  props<{
    onboardingType: OnboardingType;
  }>(),
);

export const setOnboardingSelectedStep = createAction(
  '[Onboarding] Set Onboarding Selected Step',
  props<{
    step: OnboardingClientSteps | OnboardingTrainerSteps | OnboardingNutritionistSteps | OnboardingGymSteps | null;
  }>(),
);

export const loadOnboardingSteps = createAction(
  '[Onboarding] Load Onboarding Steps',
  props<{
    onboardingType: OnboardingType;
  }>(),
);

export const loadOnboardingStepsSuccess = createAction(
  '[Onboarding] Load Onboarding Steps Success',
  props<{
    steps: OnboardingStep[];
  }>(),
);
export const loadOnboardingStepsFailure = createAction(
  '[Onboarding] Load Onboarding Steps Failure',
  props<{
    error: ResponseError;
  }>(),
);
export const addOnboardingStep = createAction('[Onboarding] Add Onboarding Step', props<{ step: OnboardingStep }>());

export const updateOnboardingStep = createAction(
  '[Onboarding] Update Onboarding Step',
  props<{
    step: OnboardingStep;
  }>(),
);

export const deleteOnboardingStep = createAction('[Onboarding] Delete Onboarding Step', props<{ id: number }>());

export const setClientOnboardingPersonalDetails = createAction(
  '[Onboarding] Set Client Onboarding Personal Details',
  props<{
    personalDetails: ClientOnboardingPersonalDetails;
  }>(),
);

export const setClientOnboardingGoals = createAction(
  '[Onboarding] Set Client Onboarding Goals',
  props<{
    goals: string[];
  }>(),
);

export const setClientOnboardingFitnessExperience = createAction(
  '[Onboarding] Set Client Onboarding Fitness Experience',
  props<{
    fitnessExperience: string;
  }>(),
);

export const setClientOnboardingTrainingLocation = createAction(
  '[Onboarding] Set Client Onboarding Training Location',
  props<{
    trainingLocation: string;
    howToTrain: string;
  }>(),
);

export const setClientOnboardingFoodPreferences = createAction(
  '[Onboarding] Set Client Onboarding Food Preferences',
  props<{
    foodPreferences: string[];
    isAllergic: boolean;
    allergies: string[];
  }>(),
);

export const setClientOnboardingAvailability = createAction(
  '[Onboarding] Set Client Onboarding Availability',
  props<{
    availability: { days: string[]; times: string[] };
  }>(),
);

export const setClientOnboardingLocation = createAction(
  '[Onboarding] Set Client Onboarding Location',
  props<{
    country: string;
    county: string;
    city: string;
  }>(),
);

export const completeOnboardingClient = createAction(
  '[Onboarding] Complete Onboarding Client',
  props<{
    clientData: OnboardingClient;
  }>(),
);

export const completeOnboardingClientSuccess = createAction('[Onboarding] Complete Onboarding Client Success');

export const completeOnboardingClientFailure = createAction(
  '[Onboarding] Complete Onboarding Client Failure',
  props<{
    error: ResponseError;
  }>(),
);

export const setTrainerOnboardingPersonalDetails = createAction(
  '[Onboarding] Set Trainer Onboarding Personal Details',
  props<{
    personalDetails: OnboardingPersonalDetails;
  }>(),
);

export const setTrainerOnboardingContactDetails = createAction(
  '[Onboarding] Set Trainer Onboarding Contact Details',
  props<{
    contactDetails: OnboardingContactDetails;
  }>(),
);

export const setTrainerOnboardingNutritionistDetails = createAction(
  '[Onboarding] Set Trainer Onboarding Nutritionist Details',
  props<{
    isNutritionist: boolean;
    nutritionistType: NutritionistType;
    nutritionistExperience: string;
    nutritionistDiets: string[];
  }>(),
);

export const setTrainerOnboardingFitnessExperience = createAction(
  '[Onboarding] Set Trainer Onboarding Fitness Experience',
  props<{
    trainerType: TrainerType | null;
    trainingExperience: string;
  }>(),
);

export const setTrainerOnboardingTrainingLocation = createAction(
  '[Onboarding] Set Trainer Onboarding Training Location',
  props<{
    trainingLocation: string[];
    trainingOnline: string[];
    trainingInPerson: string[];
  }>(),
);

export const setTrainerOnboardingAvailability = createAction(
  '[Onboarding] Set Trainer Onboarding Availability',
  props<{
    availability: { days: string[]; times: string[] };
  }>(),
);

export const setTrainerOnboardingLocation = createAction(
  '[Onboarding] Set Trainer Onboarding Location',
  props<{
    country: string;
    county: string;
    city: string;
    fullStreet: string;
    gymName: string;
  }>(),
);

export const completeOnboardingTrainer = createAction(
  '[Onboarding] Complete Onboarding Trainer',
  props<{
    trainerData: OnboardingTrainer;
  }>(),
);

export const completeOnboardingTrainerSuccess = createAction('[Onboarding] Complete Onboarding Trainer Success');

export const completeOnboardingTrainerFailure = createAction(
  '[Onboarding] Complete Onboarding Trainer Failure',
  props<{
    error: ResponseError;
  }>(),
);

export const setNutritionistOnboardingPersonalDetails = createAction(
  '[Onboarding] Set Nutritionist Onboarding Personal Details',
  props<{
    personalDetails: OnboardingPersonalDetails;
  }>(),
);

export const setNutritionistOnboardingContactDetails = createAction(
  '[Onboarding] Set Nutritionist Onboarding Contact Details',
  props<{
    contactDetails: OnboardingContactDetails;
  }>(),
);

export const setNutritionistOnboardingNutritionExperience = createAction(
  '[Onboarding] Set Nutritionist Onboarding Nutrition Experience',
  props<{
    nutritionistType: NutritionistType;
    nutritionistExperience: string;
    nutritionistDiets: string[];
  }>(),
);

export const setNutritionistOnboardingConsultingLocation = createAction(
  '[Onboarding] Set Nutritionist Onboarding Consulting Location',
  props<{
    consultingLocation: string[];
  }>(),
);

export const setNutritionistOnboardingAvailability = createAction(
  '[Onboarding] Set Nutritionist Onboarding Availability',
  props<{
    availability: { days: string[]; times: string[] };
  }>(),
);

export const setNutritionistOnboardingLocation = createAction(
  '[Onboarding] Set Nutritionist Onboarding Location',
  props<{
    country: string;
    county: string;
    city: string;
    fullStreet: string;
    cabinetName: string;
  }>(),
);

export const completeOnboardingNutritionist = createAction(
  '[Onboarding] Complete Onboarding Nutritionist',
  props<{
    nutritionistData: OnboardingNutritionist;
  }>(),
);

export const completeOnboardingNutritionistSuccess = createAction(
  '[Onboarding] Complete Onboarding Nutritionist Success',
);

export const completeOnboardingNutritionistFailure = createAction(
  '[Onboarding] Complete Onboarding Nutritionist Failure',
  props<{
    error: ResponseError;
  }>(),
);

export const setGymOnboardingGymInfo = createAction(
  '[Onboarding] Set Gym Onboarding Gym Info',
  props<{
    name: string;
    gymType: string;
    activePersonalTrainers: string;
  }>(),
);

export const setOnboardingGymContactDetails = createAction(
  '[Onboarding] Set Gym Onboarding Contact Details',
  props<{
    contactDetails: OnboardingContactDetails;
  }>(),
);

export const setGymOnboardingAvailability = createAction(
  '[Onboarding] Set Gym Onboarding Availability',
  props<{
    availability: { days: string[]; times: string[] };
  }>(),
);

export const setGymOnboardingLocation = createAction(
  '[Onboarding] Set Gym Onboarding Location',
  props<{
    country: string;
    county: string;
    city: string;
    fullStreet: string;
  }>(),
);

export const completeOnboardingGym = createAction(
  '[Onboarding] Complete Onboarding Gym',
  props<{
    gymData: OnboardingGym;
  }>(),
);

export const completeOnboardingGymSuccess = createAction('[Onboarding] Complete Onboarding Gym Success');

export const completeOnboardingGymFailure = createAction(
  '[Onboarding] Complete Onboarding Gym Failure',
  props<{
    error: ResponseError;
  }>(),
);
