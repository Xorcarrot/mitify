import { UserStateInterface } from './../store/userState.interface';
import { createReducer, on } from "@ngrx/store";
import * as LoginActions from "../actions/login.actions";

export const initialState: UserStateInterface = {
    isLoading: false,
    user: null,
    error: null,
    token: null,
};

export const reducers = createReducer(initialState, 
    on(LoginActions.signIn, (state) => ({
        ...state, isLoading: true
    })),
    on(LoginActions.signInSuccess, (state, action) => ({
        ...state, 
        isLoading: false,
        user: action.user,
    })),
    on(LoginActions.signInFailure, (state, action) => ({
        ...state, 
        isLoading: false,
        error: action.error
    })),
    on(LoginActions.signOut, (state) => ({
        ...state, isLoading: false
    })),
);