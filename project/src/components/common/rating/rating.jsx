import React from 'react';
import PropTypes from 'prop-types';

function Rating({value, title, onRatingChange}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={`${value}`}
        id={`${value}-stars`}
        type="radio"
        onClick={onRatingChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
