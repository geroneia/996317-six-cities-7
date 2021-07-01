import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {connect} from 'react-redux';
import {logout} from '../../../store/api-actions';

function PageHeader({authorizationStatus, authInfo: {avatarUrl, email, name}, onLogout}) {
  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    onLogout();
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.AUTH ? (
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
                      <Link
                        className="header__nav-link"
                        onClick={handleLogoutClick}
                        to='/'
                      >
                        <span className="header__signout">Sign out</span>
                      </ Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authInfo: propType.user,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = ({authorizationStatus, authInfo}) => ({
  authorizationStatus,
  authInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {PageHeader};
export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
