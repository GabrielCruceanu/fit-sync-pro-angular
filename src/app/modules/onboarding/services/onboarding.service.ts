import { Injectable } from '@angular/core';
import { UserService } from '@app/modules/auth/user.service';
import { Observable, of } from 'rxjs';
import {
  OBBOARDING_GYM,
  ONBOARDING_CLIENT,
  ONBOARDING_NUTRITIONIST,
  ONBOARDING_TRAINER,
} from '@app/modules/onboarding/constants/onboarding-steps';
import { OnboardingStep, OnboardingType } from '@app/modules/onboarding/models/onboarding.model';
import { OnboardingClient } from '@app/modules/onboarding/store/onboarding.reducer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {}

  getSteps(onboardingType: OnboardingType): Observable<OnboardingStep[]> {
    // Replace with real API call
    let steps: OnboardingStep[] = [];
    switch (onboardingType) {
      case OnboardingType.Client:
        steps = ONBOARDING_CLIENT;
        break;
      case OnboardingType.Trainer:
        steps = ONBOARDING_TRAINER;
        break;
      case OnboardingType.Nutritionist:
        steps = ONBOARDING_NUTRITIONIST;
        break;
      case OnboardingType.Gym:
        steps = OBBOARDING_GYM;
        break;
    }
    return of(steps);
  }

  setOnboardingClientData(data: OnboardingClient): Observable<boolean> {
    this._userService.setOnboarding = true;
    // Replace with real API call
    console.log('Onboarding data:', data);
    this._router.navigate(['/dashboard']);
    return of(true);
  }
}
