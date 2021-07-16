import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PageHeader from '../../common/page-header/page-header';
import {login} from '../../../store/api-actions';
import {Link} from 'react-router-dom';
import {getCity} from '../../../store/app/selectors';
import {validateEmail, validatePassword} from '../../../utils';
import {withErrorAlert} from '../../common/with-error-alert/with-error-alert';
import PropTypes from 'prop-types';

function LogInPage(props) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const {name} = useSelector(getCity);
  const dispatch = useDispatch();
  const {onError} = props;


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isEmailValid = validateEmail(loginRef.current.value);
    const isPasswordValid = validatePassword(passwordRef.current.value);
    !isEmailValid && onError(loginRef.current);
    !isPasswordValid && onError(passwordRef.current);

    if (isEmailValid && isPasswordValid) {
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <PageHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`/${name}`}>
                <span>{name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

LogInPage.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default withErrorAlert(LogInPage);
