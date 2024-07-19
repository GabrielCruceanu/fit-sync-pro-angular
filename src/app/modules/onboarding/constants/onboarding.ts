import { OnboardingUserType } from '@app/modules/onboarding/models/onboarding-user-type.model';
import { OnboardingStep, OnboardingType } from '@app/modules/onboarding/models/onboarding.model';

export const USER_TYPES: OnboardingUserType[] = [
  {
    id: 'client',
    type: OnboardingType.Client,
    name: 'Client',
    icon: 'user.svg',
  },
  { id: 'trainer', type: OnboardingType.Trainer, name: 'Trainer', icon: 'trainer.svg' },
  {
    id: 'nutritionist',
    type: OnboardingType.Nutritionist,
    name: 'Nutritionist',
    icon: 'nutrition.svg',
  },
  { id: 'gym', type: OnboardingType.Gym, name: 'Gym', icon: 'gym.svg' }, // Add more user types as needed
];

export const ONBOARDING_CLIENT: OnboardingStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    completed: false,
  },
  {
    id: 2,
    title: 'Fitness Goals',
    description: 'What are your fitness goals? Select one or more options below.',
    completed: false,
  },
  {
    id: 3,
    title: 'Fitness Experience',
    description: 'How would you describe your fitness experience level?',
    completed: false,
  },
  {
    id: 4,
    title: 'Training Location',
    description: 'How would you like to train?',
    completed: false,
  },
  {
    id: 5,
    title: 'Dietary Preferences',
    description: 'What do you like to eat?',
    completed: false,
  },
  {
    id: 6,
    title: 'Availability',
    description: 'When are you available to train?',
    completed: false,
  },
  {
    id: 7,
    title: 'Location',
    description: 'Where are you located?',
    completed: false,
  },
  {
    id: 8,
    title: 'Overview',
    description: 'Overview your information',
    completed: false,
  },
];

export const ONBOARDING_TRAINER: OnboardingStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    completed: false,
  },
  {
    id: 2,
    title: 'Contact Details',
    description: 'Please provide your contact details below.',
    completed: false,
  },
  {
    id: 3,
    title: 'Nutrition Experience',
    description:
      'How would you describe your nutrition experience level? If you are not a nutritionist, please select "No".',
    completed: false,
  },
  {
    id: 4,
    title: 'Fitness Experience',
    description: 'How would you describe your fitness experience level?',
    completed: false,
  },
  {
    id: 5,
    title: 'Training Location',
    description: 'How would you like to train?',
    completed: false,
  },
  {
    id: 6,
    title: 'Availability',
    description: 'When are you available to train?',
    completed: false,
  },
  {
    id: 7,
    title: 'Location',
    description: 'Where are you located?',
    completed: false,
  },
  {
    id: 8,
    title: 'Overview',
    description: 'Overview your information',
    completed: false,
  },
];
export const ONBOARDING_NUTRITIONIST: OnboardingStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    completed: false,
  },
  {
    id: 2,
    title: 'Contact Details',
    description: 'Please provide your contact details below.',
    completed: false,
  },
  {
    id: 3,
    title: 'Nutrition Experience',
    description: 'How would you describe your nutrition experience level?',
    completed: false,
  },
  {
    id: 5,
    title: 'Consulting Location',
    description: 'How would you like to consult?',
    completed: false,
  },
  {
    id: 6,
    title: 'Availability',
    description: 'When are you available to train?',
    completed: false,
  },
  {
    id: 7,
    title: 'Location',
    description: 'Where are you located?',
    completed: false,
  },
  {
    id: 8,
    title: 'Overview',
    description: 'Overview your information',
    completed: false,
  },
];
export const OBBOARDING_GYM: OnboardingStep[] = [
  {
    id: 1,
    title: 'Personal Information',
    description: 'Tell us about yourself',
    completed: false,
  },
  {
    id: 2,
    title: 'Fitness Details',
    description: 'What are your fitness goals? Select one or more options below.',
    completed: false,
  },
  {
    id: 3,
    title: 'Dietary Preferences',
    description: 'What do you like to eat?',
    completed: false,
  },
  {
    id: 4,
    title: 'Training Location',
    description: 'How would you like to train?',
    completed: false,
  },
  {
    id: 5,
    title: 'Medical Conditions',
    description: 'Do you have any medical conditions?',
    completed: false,
  },
  {
    id: 6,
    title: 'Availability',
    description: 'When are you available to train?',
    completed: false,
  },
  {
    id: 7,
    title: 'Location',
    description: 'Where are you located?',
    completed: false,
  },
  {
    id: 8,
    title: 'Review',
    description: 'Review your information',
    completed: false,
  },
];

export const STEPS_COUNT = 4;

export const AVAILABILITY_DAYS = [
  {
    name: 'Monday',
    selected: false,
  },
  {
    name: 'Tuesday',
    selected: false,
  },
  {
    name: 'Wednesday',
    selected: false,
  },
  {
    name: 'Thursday',
    selected: false,
  },
  {
    name: 'Friday',
    selected: false,
  },
  {
    name: 'Saturday',
    selected: false,
  },
  {
    name: 'Sunday',
    selected: false,
  },
];

export const AVAILABILITY_TIME = [
  {
    name: 'Morning',
    selected: false,
  },
  {
    name: 'Lunch',
    selected: false,
  },
  {
    name: 'Evening',
    selected: false,
  },
];
