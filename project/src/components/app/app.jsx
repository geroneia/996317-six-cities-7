import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFound from '../pages/not-found-page/not-found-page';
import OfferPage from '../pages/offer-page/offer-page';
import LogInPage from '../pages/login-page/login-page';
import LoadingPage from '../pages/loading-page/loading-page';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getDataLoadStatus} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isLoaded = useSelector(getDataLoadStatus);

  if (isCheckedAuth(authorizationStatus) || !isLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
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
        <Route exact path={AppRoute.NOT_FOUND}>
          <NotFound />
        </Route>
        <Route path={AppRoute.MAIN}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
