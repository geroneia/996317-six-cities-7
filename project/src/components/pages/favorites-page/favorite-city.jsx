import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../../card/card';
import {AppRoute} from '../../../const';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import {PlaceMark} from '../../../const';

function FavoriteCity(props) {
  const {city, favoriteOffers} = props;
  const place = PlaceMark.FAVORITES;
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.MAIN}/${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => <Card key={offer.id} offer={offer} place={place} />)}
      </div>
    </li>
  );
}

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default FavoriteCity;
