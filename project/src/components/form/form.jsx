import React, {useState} from 'react';
import Rating from '../rating/rating';
import {RATINGS} from '../../const';

function Form() {
  const [userComment, setUserComment] = useState({rating: '', message: ''});
  const handleRatingChange = ({target: {value}}) => setUserComment({...userComment, rating: value});
  const handleMessageChange = ({target: {value}}) => setUserComment({...userComment, message: value});
  const {rating, message} = userComment;
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((name, i) => (
          <Rating
            key={name}
            value={RATINGS.length - i}
            title={name}
            checked={rating === name}
            onChange={handleRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange = {handleMessageChange}
        value={message}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default Form;
