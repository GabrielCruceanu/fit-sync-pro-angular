export enum OnboardingType {
  Welcome = 'Welcome',
  Client = 'client',
  Trainer = 'trainer',
  Nutritionist = 'nutritionist',
  Gym = 'gym',
}

export interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export enum OnboardingClientSteps {
  PersonalDetails = 'PERSONAL_DETAILS',
  Goals = 'GOALS',
  DietaryPreferences = 'DIETARY_PREFERENCES',
  FitnessExperience = 'FITNESS_EXPERIENCE',
  TrainingLocation = 'TRAINING_LOCATION',
  TrainingOnlinePreferences = 'TRAINING_ONLINE_PREFERENCES',
  TrainingInPersonPreferences = 'TRAINING_IN_PERSON_PREFERENCES',
  Availability = 'AVAILABILITY',
  Location = 'LOCATION',
  Notifications = 'NOTIFICATIONS',
  Overview = 'OVERVIEW',
}

export enum ClientFitnessGoals {
  WeightLoss = 'Weight Loss',
  MuscleGain = 'Muscle Gain',
  Flexibility = 'Flexibility',
  HealthImprovement = 'Health Improvement',
  GeneralFitness = 'General Fitness',
}

export enum FitnessExperience {
  Beginner = 'Beginner (Up to a year)',
  Intermediate = 'Intermediate (1-2 years)',
  Advanced = 'Advanced (Over 2 years)',
}

export enum FitnessPreferences {
  Home = 'Home',
  Gym = 'Gym',
  Outdoor = 'Outdoor',
  GroupClass = 'Group Class',
  OneToOne = 'One To One',
}

export enum TrainingLocation {
  Online = 'Online',
  InPerson = 'In Person',
}

export enum NutritionistLocation {
  Online = 'Online',
  AtCabinet = 'At-Cabinet',
}

export enum TrainingOnline {
  Home = 'Home',
  Gym = 'Gym',
  Outdoor = 'Outdoor',
}

export enum TrainingInPerson {
  OneToOne = 'One to One',
  Group = 'Group',
}

export enum AvailabilityDays {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export enum AvailabilityTime {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
}

export enum FoodPreferences {
  Omnivor = 'Omnivor',
  Vegetarian = 'Vegetarian',
  Vegan = 'Vegan',
  Keto = 'Keto',
}

export enum FoodAllergiesType {
  CerealsContainingGluten = 'Cereals containing gluten',
  Crustaceans = 'Crustaceans',
  Eggs = 'Eggs',
  Fish = 'Fish',
  Peanuts = 'Peanuts',
  Soybeans = 'Soybeans',
  MilkAndDairyProducts = 'Milk and dairy products',
  Nuts = 'Nuts',
  MustardAndDerivedProducts = 'Mustard and derived products',
  SesameSeedsAndDerivedProducts = 'Sesame seeds and derived products',
  SulfurDioxideAndSulfites = 'Sulfur dioxide and sulfites',
  LupineAndDerivedProducts = 'Lupine and derived products',
  MolluscsAndDerivedProducts = 'Molluscs and derived products',
  CeleryAndDerivedProducts = 'Celery and derived products',
  Others = 'Others',
}

export enum OnboardingTrainerSteps {
  PersonalDetails = 'PERSONAL_DETAILS',
  Contact = 'CONTACT',
  NutritionExperience = 'NUTRITION_EXPERIENCE',
  FitnessExperience = 'FITNESS_EXPERIENCE',
  TrainingLocation = 'TRAINING_LOCATION',
  TrainingOnlinePreferences = 'TRAINING_ONLINE_PREFERENCES',
  TrainingPhysicalPreferences = 'TRAINING_PHYSICAL_PREFERENCES',
  Availability = 'AVAILABILITY',
  Location = 'LOCATION',
  Notifications = 'NOTIFICATIONS',
  Overview = 'OVERVIEW',
}

export enum IsNutritionist {
  Yes = 'Yes',
  No = 'No',
}

export enum OnboardingNutritionistSteps {
  PersonalDetails = 'PERSONAL_DETAILS',
  Contact = 'CONTACT',
  NutritionExperience = 'NUTRITION_EXPERIENCE',
  Availability = 'AVAILABILITY',
  Location = 'LOCATION',
  Notifications = 'NOTIFICATIONS',
  Overview = 'OVERVIEW',
}

export enum OnboardingGymSteps {
  PersonalDetails = 'PERSONAL_DETAILS',
  Contact = 'CONTACT',
  Availability = 'AVAILABILITY',
  Location = 'LOCATION',
  Notifications = 'NOTIFICATIONS',
  Overview = 'OVERVIEW',
}

export type ClientFitnessGoalsType =
  | 'Weight Loss'
  | 'Muscle Gain'
  | 'Flexibility'
  | 'Health Improvement'
  | 'General Fitness';
