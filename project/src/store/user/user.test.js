import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual(initialState);
  });
  it('should update authorizationStatus to "AUTH"', () => {
    const state = {...initialState, authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.AUTH,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
  it('should update auothorization info by load new one', () => {
    const getAuthInfoAction = {
      type: ActionType.GET_AUTH_INFO,
      payload: {
        email: 'Oliver.conner@gmail.com',
        password: '12345678',
      },
    };

    expect(user(initialState, getAuthInfoAction)).toEqual({...initialState, authInfo: getAuthInfoAction.payload});
  });
  it('action logout should update authorizationStatus to "NO_AUTH"', () => {
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(initialState, logoutAction))
      .toEqual({
        ...initialState,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
  });
});
