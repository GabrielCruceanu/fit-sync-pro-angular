import { Component } from '@angular/core';
import { SidebarComponent } from '@app/modules/layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '@app/modules/layout/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/modules/layout/components/footer/footer.component';
import { BottomNavbarComponent } from '@app/modules/layout/components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent, BottomNavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
