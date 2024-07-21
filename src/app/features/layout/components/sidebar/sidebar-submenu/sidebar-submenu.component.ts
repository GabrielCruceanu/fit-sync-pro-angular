import { Component, Input } from '@angular/core';
import { NgClass, NgForOf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { SubMenuItem } from '@app/core/models/menu.model';
import { MenuService } from '@app/features/layout/services/menu.service';

@Component({
  selector: 'app-sidebar-submenu',
  standalone: true,
  imports: [NgClass, NgForOf, NgTemplateOutlet, RouterLink, RouterLinkActive, SvgIconComponent],
  templateUrl: './sidebar-submenu.component.html',
  styleUrl: './sidebar-submenu.component.scss',
})
export class SidebarSubmenuComponent {
  @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
