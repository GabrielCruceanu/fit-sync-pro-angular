import { OnboardingContactDetails } from '@app/features/onboarding/models/onboarding.model';

export type GymType =
  | 'Fitness Center'
  | 'Health Club'
  | 'Boutique Gym'
  | 'CrossFit Box'
  | 'Yoga Studio'
  | 'Pilates Studio'
  | 'Martial Arts Gym'
  | 'Swimming Pool'
  | 'Sports Complex'
  | 'Community Center'
  | 'Corporate Gym'
  | 'Hotel Gym'
  | 'Outdoor Fitness Facility'
  | 'Virtual Gym'
  | 'Other';

export interface OnboardingGym {
  name: string;
  gymType: string;
  activePersonalTrainers: string;
  contactDetails: OnboardingContactDetails | null;
  availabilityDays: string[];
  availabilityTimes: string[];
  country: string;
  county: string;
  city: string;
  fullStreet: string;
}
