import React from 'react';
import PropTypes, {shape} from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFound from '../pages/not-found-page/not-found-page';
import RoomPage from '../pages/room-page/room-page';
import LogInPage from '../pages/login-page/login-page';
import LoadingPage from '../pages/loading-page/loading-page';
import {isCheckedAuth} from '../../utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App({authorizationStatus, isDataLoaded}) {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded.offers) {
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
          render={({match}) => <RoomPage id={+match.params.id} />}
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

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: shape({
    offers: PropTypes.bool.isRequired,
    offerDetails: PropTypes.bool.isRequired,
    nearbyOffers: PropTypes.bool.isRequired,
    reviews: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}) => ({
  authorizationStatus: authorizationStatus,
  isDataLoaded: {
    ...isDataLoaded,
    offers: true,
  },
});

export {App};
export default connect(mapStateToProps)(App);
