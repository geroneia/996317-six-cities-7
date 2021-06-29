import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import ReviewItem from '../review-item/review-item';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(propType.review).isRequired,
};

export default ReviewsList;
