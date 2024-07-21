import { AuthState } from '@app/auth/store/auth.state';
import { createReducer, on } from '@ngrx/store';
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
  signUp,
  signUpSuccess,
} from '@app/auth/store/auth.actions';

/**
 * The `initialState` object represents the initial state of the authentication module.
 * It has three properties: `user`, `error`, and `isAuthenticated`.
 * `user` is null initially, representing no user is logged in.
 * `error` is null initially, representing no error has occurred.
 * `isAuthenticated` is false initially, representing the user is not authenticated.
 */
export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  passwordMessage: null,
};

/**
 * `_authReducer` is a reducer function created using `createReducer` function from `@ngrx/store`.
 * It takes the `initialState` and a series of action handlers.
 * Each action handler is created using `on` function from `@ngrx/store`.
 * The `on` function takes an action and a reducer function.
 * The reducer function takes the current state and the action payload, and returns the new state.
 */
export const authReducer = createReducer<AuthState>(
  initialState,
  on(signIn, (state) => ({
    ...state,
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
  })),
  on(signInSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    isAuthenticated: true,
  })),
  on(signInFailure, (state, { error }) => ({ ...state, error, isAuthenticated: false })),
  on(signUp, (state) => ({
    ...state,
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
  })),
  on(signUpSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    authenticating: true,
    user,
  })),
  on(signInFailure, (state, { error }) => ({ ...state, error, isAuthenticated: false })),
  on(signOut, (state) => ({
    ...state,
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  })),
  on(forgotPassword, (state) => ({
    ...state,
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
    passwordMessage: null,
  })),
  on(forgotPasswordSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    passwordMessage: message,
  })),
  on(forgotPasswordFailure, (state, { error }) => ({ ...state, error, loading: false, passwordMessage: null })),
  on(resetPassword, (state) => ({
    ...state,
    user: null,
    loading: true,
    error: null,
    isAuthenticated: false,
    passwordMessage: null,
  })),
  on(resetPasswordSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    passwordMessage: message,
  })),
  on(resetPasswordFailure, (state, { error }) => ({ ...state, error, loading: false, passwordMessage: null })),
);
