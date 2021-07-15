import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {useDispatch} from 'react-redux';
import {postFavoritesStatus} from '../../../store/api-actions';

function Bookmark({id, isFavorite}) {
  const dispatch = useDispatch();
  let status = +isFavorite;
  const handleFavoriteStatus = () => {
    status === 0 ?
      status = 1 :
      status = 0;
    dispatch(postFavoritesStatus(id, status));
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
