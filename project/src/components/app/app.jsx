import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import OfferPage from '../pages/offer-page/offer-page';
import LogInPage from '../pages/login-page/login-page';
import LoadingPage from '../pages/loading-page/loading-page';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import {getDataLoadStatus, getErrorStatus} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isLoaded = useSelector(getDataLoadStatus);
  const isError = useSelector(getErrorStatus);

  if (isError) {
    return (
      <NotFoundPage />
    );
  }

  if (isCheckedAuth(authorizationStatus) || !isLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.LOGIN}>
        <LogInPage />
      </Route>
      <PrivateRoute exact path={AppRoute.FAVORITES}>
        <FavoritesPage />
      </PrivateRoute>
      <Route
        exact
        path={`${AppRoute.ROOM}/:id`}
        render={({match}) => <OfferPage id={+match.params.id} />}
      />
      <Route exact path={AppRoute.MAIN}>
        <MainPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
