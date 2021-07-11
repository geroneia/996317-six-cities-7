import React, {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Rating from '../common/rating/rating';
import {RATINGS} from '../../const';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-actions';
import {shake, validateMessage} from '../../utils';

function Form({id}) {
  const buttonRef = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();
  const disableButton = () => buttonRef.current.disabled = true;
  const enableButton = () => buttonRef.current.disabled = false;
  const disableForm = () => formRef.current.disabled = true;
  const enableForm = () => formRef.current.disabled = false;

  const emptyUserComment = {rating: '', message: ''};
  const [userComment, setUserComment] = useState(emptyUserComment);
  const onRatingChange = ({target: {value}}) => setUserComment({...userComment, rating: value});
  const handleMessageChange = ({target: {value}}) => setUserComment({...userComment, message: value});
  const {message, rating} = userComment;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!validateMessage(message) || rating.length === 0)
    {
      onEror();
    }
    else {
      disableButton();
      disableForm();
      dispatch(postReview(id, message, rating));
      setUserComment(emptyUserComment);
      formRef.current.reset();
      enableButton();
    }
  };

  const onEror = (evt) => {
    enableButton();
    enableForm();
    shake(formRef.current);
  };

  useEffect(() => {
    validateMessage(message) && rating.length !== 0 ?
      enableButton()
      :
      disableButton();

  }, [message, rating.length]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit = {handleSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((name, i) => (
          <Rating
            key={name}
            value={RATINGS.length - i}
            title={name}
            checked={rating === name}
            onRatingChange={onRatingChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleMessageChange}
        value={message}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" ref={buttonRef} disable>Submit</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  id: PropTypes.number.isRequired,
  commentPost: PropTypes.shape({
    message: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default Form;
