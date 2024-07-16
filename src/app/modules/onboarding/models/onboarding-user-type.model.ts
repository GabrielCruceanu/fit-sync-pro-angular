import { OnboardingType } from '@app/modules/onboarding/models/onboarding.model';

export interface OnboardingUserType {
  id: string;
  type: OnboardingType;
  name: string;
  icon: string;
}
