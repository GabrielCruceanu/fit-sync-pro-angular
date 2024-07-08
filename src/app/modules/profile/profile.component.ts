import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
