import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import PageHeader from '../../common/page-header/page-header';
import FavoriteCity from './favorite-city';
import {getFavoritesLoadStatus, getFavoritesLength, getSortedFavorites} from '../../../store/data/selectors';
import {fetchFavoritesList} from '../../../store/api-actions';
import LoadingPage from '../loading-page/loading-page';
import FavoritesEmptyPage from './favorites-empty-page';

function FavoritesPage() {
  const isLoaded = useSelector(getFavoritesLoadStatus);
  const favoritesLength = useSelector(getFavoritesLength);
  const favoriteOffers = useSelector(getSortedFavorites);
  const cities = Object.keys(favoriteOffers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesList());
  }, [dispatch]);

  if (!favoritesLength) {
    return <FavoritesEmptyPage />;
  }

  if (!isLoaded) {
    return <LoadingPage />;
  }

  return (
    <div className="page">
      <PageHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => <FavoriteCity key={city} city={city} favoriteOffers={favoriteOffers[city]} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;

