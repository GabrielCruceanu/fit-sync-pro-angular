import { OnboardingContactDetails, OnboardingPersonalDetails } from '@app/features/onboarding/models/onboarding.model';

export type NutritionistType =
  | 'Registered Dietitian'
  | 'Sports Nutritionist'
  | 'Clinical Nutritionist'
  | 'Weight Loss Specialist'
  | 'Holistic Nutritionist'
  | 'Functional Nutritionist'
  | 'Nutritional Therapist'
  | 'Gut Health Specialist'
  | 'Plant-Based Nutritionist'
  | 'Eating Disorder Specialist'
  | 'Child Nutritionist'
  | 'Prenatal Nutritionist'
  | 'Postnatal Nutritionist'
  | 'Online Nutritionist'
  | 'Other';

export interface OnboardingNutritionist {
  personalDetails: OnboardingPersonalDetails | null;
  contactDetails: OnboardingContactDetails | null;
  nutritionistType: NutritionistType | null;
  nutritionistExperience: string;
  nutritionistDiets: string[];
  consultingLocation: string[];
  availabilityDays: string[];
  availabilityTimes: string[];
  country: string;
  county: string;
  city: string;
  fullStreet: string;
  cabinetName: string;
}
