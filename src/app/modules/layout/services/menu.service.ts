import { Injectable, OnDestroy, signal } from '@angular/core';
import { MenuItem, SubMenuItem } from '@app/core/models/menu.model';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from '@app/core/constants/menu';
import { ProfileService } from '@app/modules/profile/services/profile.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService implements OnDestroy {
  private _showSidebar = signal(true);
  private _showMobileMenu = signal(false);
  private _pagesMenu = signal<MenuItem[]>([]);
  private _clientMenu = signal<SubMenuItem[]>([]);
  private _trainerMenu = signal<SubMenuItem[]>([]);
  private _nutritionistMenu = signal<SubMenuItem[]>([]);
  private _gymMenu = signal<SubMenuItem[]>([]);
  private _adminMenu = signal<SubMenuItem[]>([]);
  private _subscription = new Subscription();

  constructor(
    private router: Router,
    private profileService: ProfileService,
  ) {
    //   Set dynamic menu
    this._pagesMenu.set(Menu.pages);
    this._clientMenu.set(Menu.clientMenu);
    this._trainerMenu.set(Menu.trainerMenu);
    this._nutritionistMenu.set(Menu.nutritionistMenu);
    this._gymMenu.set(Menu.gymMenu);

    let sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Expand menu base on active route
        this._pagesMenu().forEach((menu: MenuItem) => {
          let activeGroup = false;

          menu.items.forEach((subMenu: SubMenuItem) => {
            const active = this.isActive(subMenu.route);
            subMenu.expanded = active;
            subMenu.active = active;

            if (active) {
              activeGroup = true;
            }

            if (subMenu.children) {
              this.expand(subMenu.children);
            }
          });
          menu.active = activeGroup;
        });
      }
    });
  }
  get showSideBar() {
    return this._showSidebar();
  }
  get showMobileMenu() {
    return this._showMobileMenu();
  }
  get pagesMenu() {
    return this._pagesMenu();
  }
  get menu() {
    switch (this.profileService.profile?.type) {
      case 'client':
        return this._clientMenu();
      case 'trainer':
        return this._trainerMenu();
      case 'nutritionist':
        return this._nutritionistMenu();
      case 'gym':
        return this._gymMenu();
      default:
        return this._adminMenu();
    }
  }
  get clientMenu() {
    return this._clientMenu();
  }
  get trainerMenu() {
    return this._trainerMenu();
  }
  get nutritionistMenu() {
    return this._nutritionistMenu();
  }
  get gymMenu() {
    return this._gymMenu();
  }

  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }
  set showMobileMenu(value: boolean) {
    this._showMobileMenu.set(value);
  }

  public toggleSidebar() {
    this._showSidebar.set(!this._showSidebar());
  }

  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }
  public toggleSubMenu(submenu: SubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  private expand(items: Array<any>): void {
    items.forEach((item) => {
      item.expanded = this.isActive(item.route);

      if (item.children) {
        this.expand(item.children);
      }
    });
  }

  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree(instruction), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
