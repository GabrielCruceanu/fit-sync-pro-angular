import {
  TrainerTrainingInPerson,
  TrainerTrainingLocation,
  TrainerTrainingOnline,
  TrainerType,
} from '@app/modules/onboarding/models/trainer.model';
import { TrainingInPerson, TrainingLocation, TrainingOnline } from '@app/modules/onboarding/models/onboarding.model';

export const TRAINER_TYPES: TrainerType[] = [
  'Personal Trainer',
  'Strength Coach',
  'Yoga Instructor',
  'Pilates Instructor',
  'CrossFit Coach',
  'Group Fitness Instructor',
  'Athletic Trainer',
  'Nutrition Coach',
  'Rehabilitation Specialist',
  'Martial Arts Instructor',
  'Dance Instructor',
  'Sports Conditioning Coach',
  'Cycling Instructor',
  'Running Coach',
  'Swimming Instructor',
  'Bootcamp Instructor',
  'Functional Fitness Trainer',
  'Wellness Coach',
  'Bodybuilding Coach',
  'Online Coach',
  'Other',
];

export const TRAINER_EXPERIENCE = ['1-2 years', '3-5 years', '5-10 years', '10-15 years', '15-20 years', '20+ years'];

export const TRAINER_TRAINING_LOCATION: TrainerTrainingLocation[] = [
  {
    name: TrainingLocation.InPerson,
    selected: false,
  },
  {
    name: TrainingLocation.Online,
    selected: false,
  },
];

export const TRAINER_TRAINING_ONLINE: TrainerTrainingOnline[] = [
  {
    name: TrainingOnline.Home,
    selected: false,
  },
  {
    name: TrainingOnline.Gym,
    selected: false,
  },
  {
    name: TrainingOnline.Outdoor,
    selected: false,
  },
];

export const TRAINER_TRAINING_IN_PERSON: TrainerTrainingInPerson[] = [
  {
    name: TrainingInPerson.OneToOne,
    selected: false,
  },
  {
    name: TrainingInPerson.Group,
    selected: false,
  },
];
