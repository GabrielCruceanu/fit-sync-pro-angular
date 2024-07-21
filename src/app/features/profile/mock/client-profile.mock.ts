import { ClientProfile } from '@app/features/profile/model/client-profile.model';

export const clientProfileMock: ClientProfile = {
  id: 'c-1',
  type: 'client',
  profileSummary: {
    name: 'John Doe',
    username: 'john_doe_fitness',
    email: 'john.doe@example.com',
    phone: '+1-234-567-890',
    country: 'United States',
    state: 'California',
    city: 'San Francisco',
    birthdate: '1990-04-15',
    gender: 'Male',
  },
  physicalDetails: {
    height: 180,
    weight: 75,
    bodyMeasurements: {
      neck: 38,
      shoulders: 110,
      chest: 98,
      armLeft: 32,
      armRight: 33,
      waist: 85,
      hip: 95,
      thigh: 58,
    },
  },
  fitnessGoals: ['Weight Loss', 'Muscle Gain', 'Improve Cardiovascular Health'],
  foodPreferences: {
    dietType: 'Omnivore',
    foodAllergies: 'None',
    foodPreferences: 'Balanced diet with a focus on protein intake',
  },
  fitnessExperience: 'Advanced (Over 2 years)',
  trainingPreferences: {
    location: 'In-Person and Online',
    physicalPreferences: 'One-to-One sessions',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      time: ['Morning', 'Evening'],
    },
  },
  progressTracking: {
    recentMetrics: {
      weight: 75,
      BMI: 23.1,
      bodyFat: '15%',
    },
    goalsAchieved: ['Lost 5 kg in the last 6 months', 'Improved endurance by 20%'],
  },
  activityFeed: {
    recentWorkouts: ['HIIT session with Trainer Mike', 'Strength training with Trainer Anna'],
    upcomingSessions: [
      {
        type: 'Cardio session',
        trainer: 'Trainer Mike',
        date: '2024-06-28',
      },
      {
        type: 'Nutrition consultation',
        nutritionist: 'Nutritionist Jane',
        date: '2024-07-02',
      },
    ],
  },
  messages: {
    recentMessage: 'Great job on your last workout, John! Keep pushing hard and stay hydrated. - Trainer Mike',
  },
};
