import { UserManagementService } from './../../user/userManagement.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import * as LoginActions from './../actions/login.actions';

@Injectable()
export class UserEffects {
    signIn$ = createEffect(() => 
        this.actions$.pipe(ofType(LoginActions.signIn), mergeMap((data) => {
            return this.userManager.userSignIn(data.mitifyUser);
        }))
    );

    constructor(private actions$: Actions, private userManager: UserManagementService) {}

}