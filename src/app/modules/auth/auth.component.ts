import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [InProgressComponent, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {}
