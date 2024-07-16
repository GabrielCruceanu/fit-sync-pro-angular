import { Injectable } from '@angular/core';
import { DayOfWeek, TrainingAvailabilityTime } from '@app/modules/onboarding/models/training-availability-time.model';

@Injectable({
  providedIn: 'root',
})
export class HourlySlotsService {
  public getHourlySlots(day: DayOfWeek) {
    const slots: TrainingAvailabilityTime[] = [];

    for (let hour = 8; hour < 22; hour++) {
      const startTime = hour.toString().padStart(2, '0') + ':00';
      const endTime = (hour + 1).toString().padStart(2, '0') + ':59';
      slots.push({
        day,
        startTime,
        endTime,
      });
    }
    return slots;
  }
}
