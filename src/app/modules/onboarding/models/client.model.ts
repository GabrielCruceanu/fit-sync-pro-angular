import { OnboardingPersonalDetails } from '@app/modules/onboarding/models/onboarding.model';

export interface ClientOnboardingPersonalDetails extends OnboardingPersonalDetails {
  height: number;
  weight: number;
}

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
