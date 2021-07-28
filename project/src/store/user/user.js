import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, getAuthInfo, logout} from '../action';
import {AuthorizationStatus} from '../../const';
import {adaptToClient} from '../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getAuthInfo, (state, action) => {
      state.authInfo = adaptToClient(action.payload);
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export default user;
