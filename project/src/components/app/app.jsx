import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import NotFound from '../pages/not-found-page/not-found-page';
import RoomPage from '../pages/room-page/room-page';
import SignIn from '../pages/sign-in-page/sign-in-page';

function App() {
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

export default App;
