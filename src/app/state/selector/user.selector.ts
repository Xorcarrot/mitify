import { createSelector } from '@ngrx/store';
import { GlobalStateInterface } from './../store/globalState.interface';

export const selectFeature = (state: GlobalStateInterface) => state.user;

export const isUserLoading = createSelector(selectFeature, (state) => state.isLoading);

export const userData = createSelector(selectFeature, (state) => state.user);

export const userError = createSelector(selectFeature, (state) => state.error);