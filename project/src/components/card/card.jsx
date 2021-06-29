import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';
import {getRatingInPercent, getType} from '../../utils';
import PremiumMark from '../common/premium-mark/premium-mark';

function Card({className, offer, onOfferChange}) {
  const {isPremium, previewImage, price, rating, title, type, id} = offer;
  const getNewActiveOfferId = () => onOfferChange(id);
  return (
    <article
      className={`${className || 'cities__place-card'} place-card`}
      onMouseEnter={getNewActiveOfferId}
    >
      {isPremium && <PremiumMark />}
      <div className={`${className || 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{getType(type)}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: propType.offer,
  className: PropTypes.string,
  onOfferChange: PropTypes.func,
};

export default Card;
