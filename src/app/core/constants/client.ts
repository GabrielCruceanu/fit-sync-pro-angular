import { ClientFitnessGoalsType } from '@app/modules/onboarding/models/onboarding.model';

export const CLIENT_FITNESS_GOAL_TYPE: ClientFitnessGoalsType[] = [
  'Weight Loss',
  'Muscle Gain',
  'Flexibility',
  'Health Improvement',
  'General Fitness',
];

export const CLIENT_FITNESS_GOALS = [
  {
    name: 'Weight Loss',
    selected: false,
  },
  {
    name: 'Muscle Gain',
    selected: false,
  },
  {
    name: 'Flexibility',
    selected: false,
  },
  {
    name: 'Health Improvement',
    selected: false,
  },
  {
    name: 'General Fitness',
    selected: false,
  },
];

export const CLIENT_FOOD_PREFERENCES = [
  {
    name: 'Vegetarian',
    selected: false,
  },
  {
    name: 'Vegan',
    selected: false,
  },
  {
    name: 'Keto',
    selected: false,
  },
  {
    name: 'Paleo',
    selected: false,
  },
  {
    name: 'Low Carb',
    selected: false,
  },
  {
    name: 'Low Fat',
    selected: false,
  },
  {
    name: 'High Protein',
    selected: false,
  },
  {
    name: 'Balanced',
    selected: false,
  },
  {
    name: 'Other',
    selected: false,
  },
];

export const CLIENT_FOOD_ALLERGIES = [
  'Dairy',
  'Eggs',
  'Fish',
  'Gluten',
  'Peanuts',
  'Shellfish',
  'Soy',
  'Tree Nuts',
  'Wheat',
  'Milk',
  'Other',
];

export const CLIENT_AVAILABILITY_DAYS = [
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

export const CLIENT_AVAILABILITY_TIME = [
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
