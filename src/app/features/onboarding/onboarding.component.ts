import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseError } from '@app/features/onboarding/models/response-error.model';
import { Store } from '@ngrx/store';
import {
  selectAllOnboardingSteps,
  selectOnboardingCompleted,
  selectOnboardingError,
  selectOnboardingLoading,
  selectOnboardingType,
} from '@app/features/onboarding/store/onboarding.selectors';
import { OnboardingSidebarComponent } from '@app/features/onboarding/components/onboarding-sidebar/onboarding-sidebar.component';
import { ThemeService } from '@app/core/services/theme.service';
import { AsyncPipe, JsonPipe, NgOptimizedImage } from '@angular/common';
import { WelcomeComponent } from '@app/features/onboarding/pages/welcome/welcome.component';
import { OnboardingStep, OnboardingType } from '@app/features/onboarding/models/onboarding.model';
import { ClientOnboardingComponent } from '@app/features/onboarding/pages/client-onboarding/client-onboarding.component';
import { TrainerOnboardingComponent } from '@app/features/onboarding/pages/trainer-onboarding/trainer-onboarding.component';
import { NutritionistOnboardingComponent } from '@app/features/onboarding/pages/nutritionist-onboarding/nutritionist-onboarding.component';
import { GymOnboardingComponent } from '@app/features/onboarding/pages/gym-onboarding/gym-onboarding.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    OnboardingSidebarComponent,
    NgOptimizedImage,
    WelcomeComponent,
    AsyncPipe,
    ClientOnboardingComponent,
    TrainerOnboardingComponent,
    NutritionistOnboardingComponent,
    GymOnboardingComponent,
    JsonPipe,
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  loading$: Observable<boolean>;
  error$: Observable<ResponseError | null>;
  completed$: Observable<boolean>;
  onboardingType$: Observable<OnboardingType>;

  onboardingSteps: Signal<OnboardingStep[]>;

  constructor(
    public themeService: ThemeService,
    private store: Store,
  ) {
    this.loading$ = this.store.select(selectOnboardingLoading);
    this.error$ = this.store.select(selectOnboardingError);
    this.completed$ = this.store.select(selectOnboardingCompleted);
    this.onboardingType$ = this.store.select(selectOnboardingType);
    this.onboardingSteps = this.store.selectSignal(selectAllOnboardingSteps);
  }

  protected readonly OnboardingType = OnboardingType;
}
