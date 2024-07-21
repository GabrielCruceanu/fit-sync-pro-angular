import { Component } from '@angular/core';
import { InProgressComponent } from '@app/shared/pages/in-progress/in-progress.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
