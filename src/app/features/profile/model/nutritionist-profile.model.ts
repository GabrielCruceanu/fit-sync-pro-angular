import { RecentMetrics } from '@app/features/profile/model/client-profile.model';
import { Profile } from '@app/features/profile/model/profile.model';

export interface ClientSummary {
  clientId: string;
  name: string;
  progressSummary: string;
}

export interface Session {
  type: string;
  client: string;
  date: string;
}

export interface NutritionistProfileSummary {
  name: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  birthdate: string;
  gender: string;
}

export interface NutritionistFoodPreferences {
  dietType: string;
  foodAllergies: string;
  foodPreferences: string;
}

export interface NutritionistAvailability {
  days: string[];
  time: string[];
}

export interface NutritionistTrainingPreferences {
  location: string;
  nutritionPreferences: string;
  availability: NutritionistAvailability;
}

export interface NutritionistProgressTracking {
  recentMetrics: RecentMetrics;
  clientProgress: string[];
}

export interface NutritionistActivityFeed {
  recentSessions: string[];
  upcomingSessions: Session[];
}

export interface NutritionistMessages {
  recentMessage: string;
}

export interface NutritionistProfile extends Profile {
  profileSummary: NutritionistProfileSummary;
  expertise: string[];
  foodPreferences: NutritionistFoodPreferences;
  nutritionExperience: string;
  nutritionPreferences: NutritionistTrainingPreferences;
  progressTracking: NutritionistProgressTracking;
  activityFeed: NutritionistActivityFeed;
  messages: NutritionistMessages;
}
