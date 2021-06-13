import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites-page/favorites-page';
import NotFound from '../not-found-page/not-found-page';
import Room from '../room-page/room-page';
import SignIn from '../sign-in-page/sign-in-page';
import roomPageProp from '../room-page/room-page';
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
          <Favorites favoriteOffers={favoriteOffers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offers={offers} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(roomPageProp).isRequired,
};

export default App;
