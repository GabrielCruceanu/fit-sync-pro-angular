import { Nutrition } from '@app/core/models/nutrition.model';
import { Workout } from '@app/core/models/workout.model';

export interface Program {
  id: string;
  trainerUsername: string;
  name: string;
  price: number;
  type: string;
  category: string;
  experience: string;
  workout?: Workout;
  nutrition?: Nutrition;
}
