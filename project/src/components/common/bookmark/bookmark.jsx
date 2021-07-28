import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import {postFavoritesStatus, fetchFavoritesList, fetchOfferDetails} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {redirectToRoute} from '../../../store/action';
import {AppRoute} from '../../../const';
import {getFavoritesLoadStatus, getOfferDetailsLoadStatus} from '../../../store/data/selectors';
import {PlaceMark} from '../../../const';

function Bookmark({id, isFavorite, place}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const isFavoritesLoaded = useSelector(getFavoritesLoadStatus);
  const isOfferDetailsLoaded = useSelector(getOfferDetailsLoadStatus);
  let status = +isFavorite;
  const handleFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      status = status === 0 ? 1 : 0;
      dispatch(postFavoritesStatus(id, status));
      isFavoritesLoaded && dispatch(fetchFavoritesList());
      isOfferDetailsLoaded && dispatch(fetchOfferDetails(id));
    }
  };

  return (
    <button
      onClick={handleFavoriteStatus}
      className={cx({
        'button': true,
        'place-card__bookmark-button': place === PlaceMark.PLACE_CARD,
        'place-card__bookmark-button--active': isFavorite && place === PlaceMark.PLACE_CARD,
        'property__bookmark-button': place === PlaceMark.PROPERTY,
        'property__bookmark-button--active': isFavorite && place === PlaceMark.PROPERTY,
      })}
      type="button"
    >
      <svg
        className={cx({
          'place-card__bookmark-icon': place === PlaceMark.PLACE_CARD,
          'property__bookmark-icon': place === PlaceMark.PROPERTY,
        })}
        width="18"
        height="19"
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

Bookmark.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  place: PropTypes.string,
};

export default Bookmark;
