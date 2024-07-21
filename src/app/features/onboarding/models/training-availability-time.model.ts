// Step 1: Define the DayOfWeek Enum
export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

// Step 2: Define the Time Type
export type Time = string; // Example: '14:00' for 2:00 PM

// Step 3: Define the TrainingAvailabilityTime Interface
export interface TrainingAvailabilityTime {
  day: DayOfWeek;
  startTime: Time;
  endTime: Time;
}
