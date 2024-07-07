import { BodyMeasurements, RecentMetrics } from '@app/modules/profile/model/client-profile.model';
import { Profile } from '@app/modules/profile/model/profile.model';

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

export interface TrainerProfileSummary {
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

export interface TrainerPhysicalDetails {
  height: number;
  weight: number;
  bodyMeasurements: BodyMeasurements;
}

export interface TrainerFoodPreferences {
  dietType: string;
  foodAllergies: string;
  foodPreferences: string;
}

export interface TrainerAvailability {
  days: string[];
  time: string[];
}

export interface TrainerTrainingPreferences {
  location: string;
  physicalPreferences: string;
  availability: TrainerAvailability;
}

export interface TrainerProgressTracking {
  recentMetrics: RecentMetrics;
  clientProgress: string[];
}

export interface TrainerActivityFeed {
  recentSessions: string[];
  upcomingSessions: Session[];
}

export interface TrainerMessages {
  recentMessage: string;
}

export interface TrainerProfile extends Profile {
  profileSummary: TrainerProfileSummary;
  physicalDetails: TrainerPhysicalDetails;
  expertise: string[];
  foodPreferences: TrainerFoodPreferences;
  trainingExperience: string;
  trainingPreferences: TrainerTrainingPreferences;
  progressTracking: TrainerProgressTracking;
  activityFeed: TrainerActivityFeed;
  messages: TrainerMessages;
}
