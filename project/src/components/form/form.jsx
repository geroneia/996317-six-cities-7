import React, {useRef, useState}from 'react';
import {connect} from 'react-redux';
import Rating from '../common/rating/rating';
import {RATINGS} from '../../const';
import PropTypes from 'prop-types';
import {postReview} from '../../store/api-actions';

function Form({id, onSubmitReview}) {
  const buttonRef = useRef();
  const formRef = useRef();
  const disableButton = () => buttonRef.current.disabled = true;
  const enableButton = () => buttonRef.current.disabled = false;

  const emptyUserComment = {rating: '', message: ''};
  const [userComment, setUserComment] = useState(emptyUserComment);
  const handleRatingChange = ({target: {value}}) => setUserComment({...userComment, rating: value});
  const handleMessageChange = ({target: {value}}) => setUserComment({...userComment, message: value});
  const {message, rating} = userComment;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    disableButton();
    onSubmitReview(id, message, rating);
    setUserComment(emptyUserComment);
    formRef.current.reset();
    enableButton();
  };

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
            handleRatingChange={handleRatingChange}
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
        <button className="reviews__submit form__submit button" type="submit" ref={buttonRef}>Submit</button>
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
  onSubmitReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitReview(id, message, rating) {
    dispatch(postReview(id, message, rating));
  },
});

export {Form};
export default connect(null, mapDispatchToProps)(Form);
