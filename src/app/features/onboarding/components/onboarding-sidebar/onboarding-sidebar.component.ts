import { Component, Signal } from '@angular/core';
import { ThemeService } from '@app/core/services/theme.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { OnboardingStep } from '@app/features/onboarding/models/onboarding.model';
import { Store } from '@ngrx/store';
import { selectAllOnboardingSteps } from '../../store/onboarding.selectors';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-onboarding-sidebar',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, SvgIconComponent],
  templateUrl: './onboarding-sidebar.component.html',
  styleUrl: './onboarding-sidebar.component.scss',
})
export class OnboardingSidebarComponent {
  public steps: Signal<OnboardingStep[]> = this._store.selectSignal(selectAllOnboardingSteps);
  constructor(
    public themeService: ThemeService,
    private _store: Store,
  ) {}
}
