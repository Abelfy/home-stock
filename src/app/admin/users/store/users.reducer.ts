import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/store/models/user.model";
import { UsersActions } from ".";

export interface State extends EntityState<User> {
    isLoading: boolean;
  }
  
  export const adapter = createEntityAdapter<User>({
    selectId: (user: User) => {
      return user.id
    }
  });
  
  export const reducer = createReducer(
    adapter.getInitialState({
        isLoading: false,
    }),
    on(UsersActions.loadAllUsers, (state) => ({...state, isLoading : true})),
    on(UsersActions.loadAllUsersSuccess, (state, { users }) =>
      adapter.setAll(users, {...state, isLoading : false})
    ),
  );
  
  export const { selectAll } = adapter.getSelectors();