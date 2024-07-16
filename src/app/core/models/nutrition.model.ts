import { Recipe } from '@app/core/models/recipe.model';

export interface Nutrition {
  id: string;
  photo: string;
  name: string;
  type: string;
  category: string;
  kCal: string;
  description: string;
  daysToDo: {
    dayOne: {
      name: string;
      recipes: Recipe[];
    };
    dayTwo: {
      name: string;
      recipes: Recipe[];
    };
    dayThree: {
      name: string;
      recipes: Recipe[];
    };
    dayFour: {
      name: string;
      recipes: Recipe[];
    };
    dayFive: {
      name: string;
      recipes: Recipe[];
    };
    daySix: {
      name: string;
      recipes: Recipe[];
    };
    daySeven: {
      name: string;
      recipes: Recipe[];
    };
  };
}
