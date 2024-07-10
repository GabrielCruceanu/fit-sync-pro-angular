import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}
}
