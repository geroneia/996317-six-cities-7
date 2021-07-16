import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {useSelector, useDispatch} from 'react-redux';
import {postFavoritesStatus, fetchFavoritesList} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {redirectToRoute} from '../../../store/action';
import {AppRoute} from '../../../const';
import {getFavoritesLoadStatus} from '../../../store/data/selectors';

function Bookmark({id, isFavorite}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();
  const isFavoritesLoad = useSelector(getFavoritesLoadStatus);
  let status = +isFavorite;
  const handleFavoriteStatus = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      status === 0 ?
        status = 1 :
        status = 0;
      dispatch(postFavoritesStatus(id, status));
      isFavoritesLoad && dispatch(fetchFavoritesList());
    }
  };
  return (
    <button
      onClick={handleFavoriteStatus}
      className={cx({
        'place-card__bookmark-button button': true,
        'place-card__bookmark-button--active': isFavorite,
      })}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

Bookmark.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default Bookmark;
