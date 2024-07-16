export interface Recipe {
  id: string;
  photo?: string;
  video?: string;
  name: string;
  category: string;
  kCal: string;
  proteins: string;
  carbohydrate: string;
  fats: string;
  ingredients: string[];
  modeOfExecution: string[];
}
