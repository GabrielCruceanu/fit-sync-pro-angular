import { OnboardingContactDetails, OnboardingPersonalDetails } from '@app/features/onboarding/models/onboarding.model';
import { NutritionistType } from '@app/features/onboarding/models/nutritionist.model';
import { TrainingInPerson, TrainingLocation, TrainingOnline } from '@app/features/onboarding/models/onboarding.model';

export interface OnboardingTrainer {
  personalDetails: OnboardingPersonalDetails | null;
  contactDetails: OnboardingContactDetails | null;
  isNutritionist: boolean;
  nutritionistType: NutritionistType | null;
  nutritionistExperience: string;
  nutritionistDiets: string[];
  trainerType: TrainerType | null;
  trainingExperience: string;
  trainingLocation: string[];
  trainingOnline: string[];
  trainingInPerson: string[];
  availabilityDays: string[];
  availabilityTimes: string[];
  country: string;
  county: string;
  city: string;
  fullStreet: string;
  gymName: string;
}

export type TrainerType =
  | 'Personal Trainer'
  | 'Strength Coach'
  | 'Yoga Instructor'
  | 'Pilates Instructor'
  | 'CrossFit Coach'
  | 'Group Fitness Instructor'
  | 'Athletic Trainer'
  | 'Nutrition Coach'
  | 'Rehabilitation Specialist'
  | 'Martial Arts Instructor'
  | 'Dance Instructor'
  | 'Sports Conditioning Coach'
  | 'Cycling Instructor'
  | 'Running Coach'
  | 'Swimming Instructor'
  | 'Bootcamp Instructor'
  | 'Functional Fitness Trainer'
  | 'Wellness Coach'
  | 'Bodybuilding Coach'
  | 'Online Coach'
  | 'Other';

export interface TrainerTrainingLocation {
  name: TrainingLocation;
  selected: boolean;
}

export interface TrainerTrainingOnline {
  name: TrainingOnline;
  selected: boolean;
}

export interface TrainerTrainingInPerson {
  name: TrainingInPerson;
  selected: boolean;
}
