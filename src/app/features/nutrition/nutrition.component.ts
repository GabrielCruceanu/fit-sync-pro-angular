import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';

@Component({
  selector: 'app-nutrition',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './nutrition.component.html',
  styleUrl: './nutrition.component.scss',
})
export class NutritionComponent {}
