import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';
import {Cities} from '../../const';

const cities = Object.values(Cities);

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH, authInfo: {}},
      DATA: {  popularOffers: [],
        sortedOffers: [],
        favoriteOffers: {
          data: [],
          isLoaded: true,
        },
        offers: {
          data: [],
          isLoaded: true,
        },
        offerDetails: {
          data: {},
          isLoaded: true,
        },
        nearbyOffers: [],
        reviews: []},
      APP: {  city: {
        'location': {
          'latitude': 48.8589507,
          'longitude': 2.2770205,
          'zoom': 10,
        },
        'name': 'Paris',
      },
      cities,
      sortType: 'Popular',
      activeOfferId: null},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)[1]).toBeInTheDocument();
  });
  // it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
  //   history.push(AppRoute.FAVORITES);
  //   render(fakeApp);

  //   expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
  // });
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
