import { Component, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-progress',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.scss',
})
export class InProgressComponent {
  @Input() title: string = '';
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
