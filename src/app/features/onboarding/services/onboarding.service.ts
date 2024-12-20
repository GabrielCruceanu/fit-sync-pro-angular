import { Injectable } from '@angular/core';
import { UserService } from '@app/auth/user.service';
import { Observable, of } from 'rxjs';
import {
  ONBOARDING_CLIENT,
  ONBOARDING_GYM,
  ONBOARDING_NUTRITIONIST,
  ONBOARDING_TRAINER,
} from '@app/features/onboarding/constants/onboarding';
import { OnboardingStep, OnboardingType } from '@app/features/onboarding/models/onboarding.model';
import { Router } from '@angular/router';
import { OnboardingClient } from '@app/features/onboarding/models/client.model';
import { OnboardingTrainer } from '@app/features/onboarding/models/trainer.model';
import { OnboardingNutritionist } from '@app/features/onboarding/models/nutritionist.model';
import { OnboardingGym } from '@app/features/onboarding/models/gym.model';

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
        steps = ONBOARDING_GYM;
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
  setOnboardingTrainerData(data: OnboardingTrainer): Observable<boolean> {
    this._userService.setOnboarding = true;
    // Replace with real API call
    console.log('Onboarding data:', data);
    this._router.navigate(['/dashboard']);
    return of(true);
  }
  setOnboardingNutritionistData(data: OnboardingNutritionist): Observable<boolean> {
    this._userService.setOnboarding = true;
    // Replace with real API call
    console.log('Onboarding data:', data);
    this._router.navigate(['/dashboard']);
    return of(true);
  }
  setOnboardingGymData(data: OnboardingGym): Observable<boolean> {
    this._userService.setOnboarding = true;
    // Replace with real API call
    console.log('Onboarding data:', data);
    this._router.navigate(['/dashboard']);
    return of(true);
  }
}
