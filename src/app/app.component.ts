import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatAnchor,
    RouterLink,
    MatIcon,
    MatFabButton,
    MatFabAnchor,
    MatDivider,
    MatMiniFabButton,
    MatIconButton,
    MatButton,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
