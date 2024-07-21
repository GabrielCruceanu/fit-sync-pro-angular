import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {}
