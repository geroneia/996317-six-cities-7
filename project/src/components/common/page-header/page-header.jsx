import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../../store/api-actions';
import {getAuthorizationStatus, getAuthInfo} from '../../../store/user/selectors';

function PageHeader() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authInfo = useSelector(getAuthInfo);
  const {avatarUrl, email, name} = authInfo;
  const dispatch = useDispatch();
  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.FAVORITES}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={avatarUrl} alt={`${name}'s avatar`} />
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <button
                      type="button"
                      className="header__nav-link header__nav-link-button"
                      onClick={handleLogoutClick}

                    >
                      <span className="header__signout">Sign out</span>
                    </ button>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default React.memo(PageHeader);
