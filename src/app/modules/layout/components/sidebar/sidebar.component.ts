import { Component } from '@angular/core';
import { MenuService } from '@app/modules/layout/services/menu.service';
import packageJson from '../../../../../../package.json';
import { NgClass, NgIf } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { SidebarMenuComponent } from '@app/modules/layout/components/sidebar/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, SvgIconComponent, SidebarMenuComponent, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
