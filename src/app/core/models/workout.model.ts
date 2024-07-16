import { Exercise } from '@app/core/models/exercise.model';

export interface Workout {
  id: string;
  photo: string;
  name: string;
  type: string;
  category: string;
  description: string;
  daysToDo: {
    dayOne: {
      name: string;
      exercises: Exercise[];
    };
    dayTwo: {
      name: string;
      exercises: Exercise[];
    };
    dayThree: {
      name: string;
      exercises: Exercise[];
    };
    dayFour: {
      name: string;
      exercises: Exercise[];
    };
    dayFive: {
      name: string;
      exercises: Exercise[];
    };
    daySix: {
      name: string;
      exercises: Exercise[];
    };
    daySeven: {
      name: string;
      exercises: Exercise[];
    };
  };
}
