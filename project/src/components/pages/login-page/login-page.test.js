import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import LogInPage from './login-page';

const createFakeStore = configureStore({});
const store = createFakeStore({
  USER: {
    authInfo: {},
  },
  DATA: {
    popularOffers: [],
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
    reviews: [],
  },
  APP: {  city: {
    'location': {
      'latitude': 48.8589507,
      'longitude': 2.2770205,
      'zoom': 10,
    },
    'name': 'Paris',
  },
  sortType: 'Popular',
  activeOfferId: null},
});

describe('Component: LogInPage', () => {
  it('should render "LogInPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <Router history={history}>
          <LogInPage />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('Sign in');

    userEvent.type(screen.getByTestId('email'), 'Oliver.conner@gmail.com');
    userEvent.type(screen.getByTestId('password'), '12345678');

    expect(screen.getByDisplayValue('Oliver.conner@gmail.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12345678')).toBeInTheDocument();
  });
});
