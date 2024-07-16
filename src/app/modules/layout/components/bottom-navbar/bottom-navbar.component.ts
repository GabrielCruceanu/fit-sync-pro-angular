import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuService } from '@app/modules/layout/services/menu.service';
import { JsonPipe, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss'],
  standalone: true,
  imports: [AngularSvgIconModule, JsonPipe, RouterLinkActive, NgClass, RouterLink],
})
export class BottomNavbarComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}
}
