import React from 'react';
import PropTypes from 'prop-types';
import {RatingTitles} from '../../const';

function Rating({star}) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={`${star}`} id={`${star}-stars`} type="radio"/>
      <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title={`${RatingTitles[star]}`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

Rating.propTypes = {
  star: PropTypes.number.isRequired,
};

export default Rating;
