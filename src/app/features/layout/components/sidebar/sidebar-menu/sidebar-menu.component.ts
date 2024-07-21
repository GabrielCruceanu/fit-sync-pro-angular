import { Component } from '@angular/core';
import { SidebarSubmenuComponent } from '@app/features/layout/components/sidebar/sidebar-submenu/sidebar-submenu.component';
import { MenuService } from '@app/features/layout/services/menu.service';
import { SubMenuItem } from '@app/core/models/menu.model';
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
    SidebarSubmenuComponent,
    NgClass,
    NgForOf,
    SvgIconComponent,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
