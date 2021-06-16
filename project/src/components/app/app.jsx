import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import NotFound from '../not-found-page/not-found-page';
import RoomPage from '../room-page/room-page';
import SignIn from '../sign-in-page/sign-in-page';
import * as propType from '../../prop-types';
import {sortOffersByTown} from '../../utils';

function App(props) {
  const {offers} = props;
  const favoriteOffers = sortOffersByTown(offers);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomPage offers={offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default App;
