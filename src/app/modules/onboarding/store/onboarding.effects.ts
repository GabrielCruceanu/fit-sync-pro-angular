import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as OnboardingActions from './onboarding.actions';
import { OnboardingService } from '../services/onboarding.service';

@Injectable()
export class OnboardingEffects {
  loadOnboardingSteps$ = createEffect(() =>
    this._actions.pipe(
      ofType(OnboardingActions.loadOnboardingSteps),
      mergeMap((action) =>
        this._onboardingService.getSteps(action.onboardingType).pipe(
          map((steps) => OnboardingActions.loadOnboardingStepsSuccess({ steps })),
          catchError((error) => of(OnboardingActions.loadOnboardingStepsFailure({ error }))),
        ),
      ),
    ),
  );

  completeOnboardingClient$ = createEffect(() =>
    this._actions.pipe(
      ofType(OnboardingActions.completeOnboardingClient),
      mergeMap(({ clientData }) =>
        this._onboardingService.setOnboardingClientData(clientData).pipe(
          map(() => OnboardingActions.completeOnboardingClientSuccess()),
          catchError((error) => of(OnboardingActions.completeOnboardingClientFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private _actions: Actions,
    private _onboardingService: OnboardingService,
  ) {}
}
