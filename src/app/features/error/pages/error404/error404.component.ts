import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
