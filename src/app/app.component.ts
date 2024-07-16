import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { ResponsiveHelperComponent } from '@app/shared/components/responsive-helper/responsive-helper.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgOptimizedImage, ButtonComponent, ResponsiveHelperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }
}
