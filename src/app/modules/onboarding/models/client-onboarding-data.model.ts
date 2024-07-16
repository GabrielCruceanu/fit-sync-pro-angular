import { OnboardingPersonalDetails } from '@app/modules/onboarding/models/onboarding-data.model';

export interface ClientOnboardingData {
  personalDetails: ClientOnboardingPersonalDetails;
}

export interface ClientOnboardingPersonalDetails extends OnboardingPersonalDetails {
  height: number;
  weight: number;
}
