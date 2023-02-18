import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user
);

export const isLoggedOut= createSelector(
    selectAuthState,
    auth => !auth.user
);

export const user = createSelector(
    selectAuthState,
    auth => auth.user
)

export const isAdmin = createSelector(
    selectAuthState,
    auth => true //auth.user.role.name === 'Administrator'
)