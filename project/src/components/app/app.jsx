import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFound from '../pages/not-found-page/not-found-page';
import RoomPage from '../pages/room-page/room-page';
import SignIn from '../pages/sign-in-page/sign-in-page';
import LoadingPage from '../pages/loading-page/loading-page';
import {isCheckedAuth} from '../../utils';

function App({authorizationStatus, isDataLoaded}) {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact component={MainPage}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
