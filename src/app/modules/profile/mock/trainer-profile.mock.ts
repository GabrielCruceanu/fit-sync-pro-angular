import { TrainerProfile } from '@app/modules/profile/model/trainer-profile.model';

export const trainerProfileMock: TrainerProfile = {
  id: 't-1',
  type: 'trainer',
  profileSummary: {
    name: 'Jane Smith',
    username: 'jane_smith_trainer',
    email: 'jane.smith@example.com',
    phone: '+1-987-654-321',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    birthdate: '1985-06-15',
    gender: 'Female',
  },
  physicalDetails: {
    height: 170,
    weight: 60,
    bodyMeasurements: {
      neck: 34,
      shoulders: 90,
      chest: 85,
      armLeft: 30,
      armRight: 30,
      waist: 70,
      hip: 90,
      thigh: 55,
    },
  },
  expertise: ['Weight Loss', 'Strength Training', 'Nutrition Coaching'],
  foodPreferences: {
    dietType: 'Vegetarian',
    foodAllergies: 'Peanuts',
    foodPreferences: 'Plant-based diet with high protein intake',
  },
  trainingExperience: 'Expert (Over 5 years)',
  trainingPreferences: {
    location: 'In-Person and Online',
    physicalPreferences: 'Group Sessions',
    availability: {
      days: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
      time: ['Morning', 'Evening'],
    },
  },
  progressTracking: {
    recentMetrics: {
      weight: 60,
      BMI: 20.8,
      bodyFat: '18%',
    },
    clientProgress: ['Client A lost 10 kg in 3 months', 'Client B improved strength by 30%'],
  },
  activityFeed: {
    recentSessions: ['Strength training session with Client A', 'Nutrition consultation with Client B'],
    upcomingSessions: [
      {
        type: 'HIIT session',
        client: 'Client A',
        date: '2024-06-30',
      },
      {
        type: 'Yoga session',
        client: 'Client C',
        date: '2024-07-01',
      },
    ],
  },
  messages: {
    recentMessage: 'Great progress in your last session, Jane! Keep motivating your clients. - Admin',
  },
};
