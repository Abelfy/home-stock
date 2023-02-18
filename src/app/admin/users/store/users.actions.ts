import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/store/models/user.model';

export const createUser = createAction(
  '[Users] Create User',
  props<{ user: User }>()
);
export const createUserSuccess = createAction(
  '[Users] Create User Success',
  props<{ user: User }>()
);
export const removeUser = createAction(
  '[Users] Remove User',
  props<{ userId: string }>()
);
export const updateUser = createAction(
  '[Users] Update User',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[Users] Update User Success',
  props<{ uUser: Update<User> }>()
);
export const loadAllUsers = createAction('[Users] Load All Users');
export const loadAllUsersSuccess = createAction(
  '[Users Load All Users Success',
  props<{ users: Array<User> }>()
);
export const loadAllUsersFailure = createAction(
  '[Users] Load All Users Failure'
);
export const filterUsers = createAction(
  '[Users] Filter Users',
  props<{ filter: string }>()
);
