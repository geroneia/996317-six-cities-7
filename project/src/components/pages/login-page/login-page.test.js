import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import LogInPage from './login-page';

const mockStore = configureStore({});

describe('Component: LogInPage', () => {
  it('should render "LogInPage" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <LogInPage />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i)[0]).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  userEvent.type(screen.getByTestId('email'), 'Oliver.conner@gmail.com');
  userEvent.type(screen.getByTestId('password'), '12345678');

  expect(screen.getByDisplayValue(/Oliver.conner@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/12345678/i)).toBeInTheDocument();
});
