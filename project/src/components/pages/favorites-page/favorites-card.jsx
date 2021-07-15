import React from 'react';
import {Link} from 'react-router-dom';
import * as propType from '../../../prop-types';
import {getRatingInPercent, getType} from '../../../utils';
import Bookmark from '../../common/bookmark/bookmark';

function FavoritesCard({offer}) {
  const {previewImage, price, rating, title, type, id, isFavorite} = offer;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark id={id} isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getType(type)}</p>
      </div>
    </article>
  );
}

FavoritesCard.propTypes = {
  offer: propType.offer,
};

export default FavoritesCard;
