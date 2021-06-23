import React from 'react';
import * as propType from '../../prop-types';
import {getRatingInPercent, getDateTime, getDate} from '../../utils';

function ReviewItem({review}) {
  const {user: {avatarUrl, name}, rating, comment, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDateTime(date)}>{getDate(date)}</time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  review: propType.review,
};

export default ReviewItem;
