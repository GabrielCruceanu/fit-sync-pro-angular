import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error500',
  standalone: true,
  imports: [ButtonComponent, SvgIconComponent],
  templateUrl: './error500.component.html',
  styleUrl: './error500.component.scss',
})
export class Error500Component {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
