import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import OfferPage from '../pages/offer-page/offer-page';
import LogInPage from '../pages/login-page/login-page';
import LoadingPage from '../pages/loading-page/loading-page';
import PrivateRoute from '../private-route/private-route';
import {redirectToRoute} from '../../store/action';
import {getDataLoadStatus, getErrorStatus} from '../../store/data/selectors';

function App() {
  const isError = useSelector(getErrorStatus);
  const isLoaded = useSelector(getDataLoadStatus);
  const dispatch = useDispatch();

  if (isError) {
    dispatch(redirectToRoute(AppRoute.NOT_FOUND));
  }

  if (!isLoaded && !isError) {
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
      <Route exact path={AppRoute.NOT_FOUND}>
        <NotFoundPage />
      </Route>
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
