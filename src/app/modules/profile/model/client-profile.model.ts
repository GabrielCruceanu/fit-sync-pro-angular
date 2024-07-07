import { Profile } from '@app/modules/profile/model/profile.model';

export interface BodyMeasurements {
  neck: number;
  shoulders: number;
  chest: number;
  armLeft: number;
  armRight: number;
  waist: number;
  hip: number;
  thigh: number;
}

export interface Availability {
  days: string[];
  time: string[];
}

export interface RecentMetrics {
  weight: number;
  BMI: number;
  bodyFat: string;
}

export interface UpcomingSession {
  type: string;
  trainer?: string;
  nutritionist?: string;
  date: string;
}

export interface ProgressTracking {
  recentMetrics: RecentMetrics;
  goalsAchieved: string[];
}

export interface ActivityFeed {
  recentWorkouts: string[];
  upcomingSessions: UpcomingSession[];
}

export interface ProfileSummary {
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

export interface PhysicalDetails {
  height: number;
  weight: number;
  bodyMeasurements: BodyMeasurements;
}

export interface FoodPreferences {
  dietType: string;
  foodAllergies: string;
  foodPreferences: string;
}

export interface TrainingPreferences {
  location: string;
  physicalPreferences: string;
  availability: Availability;
}

export interface Messages {
  recentMessage: string;
}

export interface ClientProfile extends Profile {
  profileSummary: ProfileSummary;
  physicalDetails: PhysicalDetails;
  fitnessGoals: string[];
  foodPreferences: FoodPreferences;
  fitnessExperience: string;
  trainingPreferences: TrainingPreferences;
  progressTracking: ProgressTracking;
  activityFeed: ActivityFeed;
  messages: Messages;
}
