import { createAction, props } from "@ngrx/store";
import { User } from "../../state/models/user.model";

export const LogIn = createAction("[Auth Form] Login", props<{ email: string , password : string }>());
export const LogInSuccess = createAction("[Auth Effect] Login Success", props<{ user: User }>());
export const LogInFailure = createAction("[Auth Effect] Login Failure", props<{ error: string  }>());
export const LogOut = createAction("[App] Logout");

