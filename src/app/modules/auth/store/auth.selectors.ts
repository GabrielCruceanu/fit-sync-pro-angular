import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@app/modules/auth/store/auth.state';
import { Features } from '@app/store/app.state';

export const selectAuthState = createFeatureSelector<AuthState>(Features.Auth);

export const selectIsAuthenticated = createSelector(selectAuthState, (state: AuthState) => state.isAuthenticated);

export const selectUser = createSelector(selectAuthState, (state: AuthState) => state.user);

export const selectAuthLoading = createSelector(selectAuthState, (state: AuthState) => state.loading);

export const selectAuthError = createSelector(selectAuthState, (state: AuthState) => state.error);
