import { MitifyUser } from './../../user/mitify_user';
import { UserResponse } from './../../user/userResponse';
import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
    '[Login] Sign In',
    props<{mitifyUser: MitifyUser}>()
    );
export const signInSuccess = createAction(
    '[Login] Sign In success',
    props<{user: UserResponse}>()
);
export const signInFailure = createAction(
    '[Login] Sign In failure',
    props<{error: string}>()
);

export const signOut = createAction('[Login] Sign Out');