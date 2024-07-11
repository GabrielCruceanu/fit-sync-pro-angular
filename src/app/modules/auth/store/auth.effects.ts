import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  forgotPassword,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  resetPassword,
  resetPasswordFailure,
  resetPasswordSuccess,
  signIn,
  signInFailure,
  signInSuccess,
  signOut,
  signOutFailure,
  signOutSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from '@app/modules/auth/store/auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '@app/modules/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  /**
   * The `signIn$` effect is created using the `createEffect` function from the `@ngrx/effects` library.
   * It listens for the `signIn` action to be dispatched.
   * When the `signIn` action is dispatched, it calls the `signIn` method from the `AuthService` with the `email` and `password` from the action.
   * If the sign in is successful, it dispatches the `signInSuccess` action with the returned user.
   * If an error occurs during the sign in, it dispatches the `signInFailure` action with the error.
   *
   * @example
   * this._actions.pipe(
   *   ofType(signIn),
   *   mergeMap((action) =>
   *     this._authService.signIn({ email: action.email, password: action.password }).pipe(
   *       map((user) => signInSuccess({ user })),
   *       catchError((error) => of(signInFailure({ error }))),
   *     ),
   *   ),
   * )
   */
  signIn$ = createEffect(() =>
    this._actions.pipe(
      ofType(signIn),
      mergeMap((action) =>
        this._authService.signIn({ email: action.email, password: action.password }).pipe(
          map((user) => signInSuccess({ user })),
          catchError((error) => of(signInFailure({ error }))),
        ),
      ),
    ),
  );

  /**
   * The `signUp$` effect is created using the `createEffect` function from the `@ngrx/effects` library.
   * It listens for the `signUp` action to be dispatched.
   * When the `signUp` action is dispatched, it calls the `signUp` method from the `AuthService` with the `email` and `password` from the action.
   * If the sign up is successful, it dispatches the `signUpSuccess` action with the returned user.
   * If an error occurs during the sign up, it dispatches the `signUpFailure` action with the error.
   *
   * @example
   * this._actions.pipe(
   *   ofType(signUp),
   *   mergeMap((action) =>
   *     this._authService.signUp({ email: action.email, password: action.password }).pipe(
   *       map((user) => signUpSuccess({ user })),
   *       catchError((error) => of(signUpFailure({ error }))),
   *     ),
   *   ),
   * )
   */
  signUp$ = createEffect(() =>
    this._actions.pipe(
      ofType(signUp),
      mergeMap((action) =>
        this._authService.signUp({ email: action.email, password: action.password }).pipe(
          map((user) => signUpSuccess({ user })),
          catchError((error) => of(signUpFailure({ error }))),
        ),
      ),
    ),
  );

  /**
   * The `signOut$` effect is created using the `createEffect` function from the `@ngrx/effects` library.
   * It listens for the `signOut` action to be dispatched.
   * When the `signOut` action is dispatched, it calls the `signOut` method from the `AuthService`.
   *
   * @example
   * this._actions.pipe(
   *   ofType(signOut),
   *   mergeMap((action) => this._authService.signOut()),
   * )
   */
  signOut$ = createEffect(() =>
    this._actions.pipe(
      ofType(signOut),
      mergeMap(() =>
        this._authService.signOut().pipe(
          map(() => signOutSuccess()),
          catchError((error) => of(signOutFailure({ error }))),
        ),
      ),
    ),
  );

  /**
   * The `forgotPassword$` effect is created using the `createEffect` function from the `@ngrx/effects` library.
   * It listens for the `forgotPassword` action to be dispatched.
   * When the `forgotPassword` action is dispatched, it calls the `forgotPassword` method from the `AuthService` with the `email` from the action.
   * If the password reset request is successful, it dispatches the `forgotPasswordSuccess` action with the returned message.
   * If an error occurs during the password reset request, it dispatches the `forgotPasswordFailure` action with the error.
   *
   * @example
   * this._actions.pipe(
   *   ofType(forgotPassword),
   *   mergeMap((action) =>
   *     this._authService.forgotPassword(action.email).pipe(
   *       map((message) => forgotPasswordSuccess({ message })),
   *       catchError((error) => of(forgotPasswordFailure({ error }))),
   *     ),
   *   ),
   * )
   */
  forgotPassword$ = createEffect(() =>
    this._actions.pipe(
      ofType(forgotPassword),
      mergeMap((action) =>
        this._authService.forgotPassword(action.email).pipe(
          map((message) => forgotPasswordSuccess({ message })),
          catchError((error) => of(forgotPasswordFailure({ error }))),
        ),
      ),
    ),
  );

  /**
   * The `resetPassword$` effect is created using the `createEffect` function from the `@ngrx/effects` library.
   * It listens for the `resetPassword` action to be dispatched.
   * When the `resetPassword` action is dispatched, it calls the `resetPassword` method from the `AuthService` with the `password` from the action.
   * If the password reset is successful, it dispatches the `resetPasswordSuccess` action with the returned message.
   * If an error occurs during the password reset, it dispatches the `resetPasswordFailure` action with the error.
   *
   * @example
   * this._actions.pipe(
   *   ofType(resetPassword),
   *   mergeMap((action) =>
   *     this._authService.resetPassword(action.password).pipe(
   *       map((message) => resetPasswordSuccess({ message })),
   *       catchError((error) => of(resetPasswordFailure({ error }))),
   *     ),
   *   ),
   * )
   */
  resetPassword$ = createEffect(() =>
    this._actions.pipe(
      ofType(resetPassword),
      mergeMap((action) =>
        this._authService.resetPassword(action.password).pipe(
          map((message) => resetPasswordSuccess({ message })),
          catchError((error) => of(resetPasswordFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private _actions: Actions,
    private _authService: AuthService,
  ) {}
}
