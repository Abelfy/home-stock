import { createReducer, on } from '@ngrx/store';
import { User } from '../../store/models/user.model';
import { AuthActions } from '.';
import { LogInFailure, LogInSuccess, LogOut } from './auth.actions';

export interface AuthState {
    user :User | null;
}

export const initialAuthState: AuthState = {
    user: undefined,
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthActions.LogInSuccess, (state, { user }) => (
        {   ...state,
            user: user,
        })),
    on(LogInFailure, (state, { error }) => ({...state,errorMessage: error})),
    on(LogOut, (state,action) => {
        return {...state, user: null }
    } )
  );