import { Component } from '@angular/core';
import { SidebarComponent } from '@app/features/layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '@app/features/layout/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/features/layout/components/footer/footer.component';
import { BottomNavbarComponent } from '@app/features/layout/components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent, BottomNavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
