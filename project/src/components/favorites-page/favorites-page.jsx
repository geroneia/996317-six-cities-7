import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../page-header/page-header';
import PropTypes from 'prop-types';
import FavoritesCard from '../favorites-card/favorites-card';
import roomPageProp from '../room-page/room-page.prop';


function Favorites({favoriteOffers}) {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={AppRoute.MAIN}>
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((favoriteOffer) => <FavoritesCard key={favoriteOffer.id} favoriteOffer={favoriteOffer} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  favoriteOffers: PropTypes.arrayOf(roomPageProp).isRequired,
};

export default Favorites;
