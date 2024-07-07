import { NutritionistProfile } from '@app/modules/profile/model/nutritionist-profile.model';

export const nutritionistProfileMock: NutritionistProfile = {
  id: 'n-1',
  type: 'nutritionist',
  profileSummary: {
    name: 'Emily Johnson',
    username: 'emily_johnson_nutrition',
    email: 'emily.johnson@example.com',
    phone: '+1-345-678-901',
    country: 'United States',
    state: 'New York',
    city: 'New York City',
    birthdate: '1988-02-20',
    gender: 'Female',
  },
  expertise: ['Weight Management', 'Sports Nutrition', 'Diabetes Management'],
  foodPreferences: {
    dietType: 'Vegan',
    foodAllergies: 'Gluten',
    foodPreferences: 'Plant-based diet with balanced nutrients',
  },
  nutritionExperience: 'Expert (Over 5 years)',
  nutritionPreferences: {
    location: 'Online and In-Person',
    nutritionPreferences: 'One-to-One and Group Sessions',
    availability: {
      days: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
      time: ['Morning', 'Afternoon'],
    },
  },
  progressTracking: {
    recentMetrics: {
      weight: 60,
      BMI: 22.0,
      bodyFat: '20%',
    },
    clientProgress: ['Client A reduced cholesterol levels by 15%', 'Client B lost 8 kg in 2 months'],
  },
  activityFeed: {
    recentSessions: ['Nutrition consultation with Client A', 'Meal planning session with Client B'],
    upcomingSessions: [
      {
        type: 'Follow-up consultation',
        client: 'Client A',
        date: '2024-07-05',
      },
      {
        type: 'Dietary assessment',
        client: 'Client C',
        date: '2024-07-08',
      },
    ],
  },
  messages: {
    recentMessage: 'Great improvements noted, Emily! Keep up the excellent guidance. - Admin',
  },
};
