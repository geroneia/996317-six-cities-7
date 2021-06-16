import React from 'react';
import PropTypes from 'prop-types';
import {RATINGS_TITLES} from '../../const';

function Rating({value}) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${value}`} id={`${value}-stars`} type="radio"/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${RATINGS_TITLES[value - 1]}`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
