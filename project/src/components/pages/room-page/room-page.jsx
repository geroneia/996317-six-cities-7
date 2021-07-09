import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PageHeader from '../../common/page-header/page-header';
import ReviewsList from '../../reviewes/review-list/review-list';
import Form from '../../form/form';
import {getRatingInPercent, getType}from '../../../utils';
import * as propType from '../../../prop-types';
import PropTypes from 'prop-types';
import Map from '../../map/map';
import NearPlacesList from '../../near-places-list/near-places-list';
import {fetchOfferDetails, fetchNearbyList, fetchReviewsList} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../../const';
import LoadingPage from '../loading-page/loading-page';
import {ActionCreator} from '../../../store/action';

function RoomPage(props) {
  const {
    authorizationStatus,
    id,
    reviews,
    city,
    onOfferDetailsLoad,
    offerDetails:
    {
      data,
      isDataLoaded,
    },
    nearbyOffers,
    clearOfferInfo,
    onNearbyLoad,
    onReviewsLoad,
  } = props;

  useEffect(() => {
    onOfferDetailsLoad(id);
    onNearbyLoad(id);
    onReviewsLoad(id);
    return () => {
      clearOfferInfo();
    };
  }, [
    id,
    onOfferDetailsLoad,
    onNearbyLoad,
    onReviewsLoad,
    clearOfferInfo,
  ]);

  if (!isDataLoaded) {
    return <LoadingPage />;
  }

  const {
    price,
    rating,
    title,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    images,
  } = data;

  return (
    <div className="page" key={id}>
      <PageHeader/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={image} className="property__image-wrapper">
                  <img className="property__image" src={image} alt={type}/>
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRatingInPercent(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getType(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {!!host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {!!reviews.length && (
                  <>
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                    <ReviewsList reviews={reviews} />
                  </>
                )}
                {authorizationStatus === AuthorizationStatus.AUTH && (
                  <Form id={id}/>
                )}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={city} offers={nearbyOffers} key={city.name} />
          </section>
        </section>
        <div className="container">
          <NearPlacesList offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  offerDetails: PropTypes.shape({
    data: propType.offer,
    isDataLoaded: PropTypes.bool.isRequired,
  }),
  nearbyOffers: PropTypes.arrayOf(propType.offer).isRequired,
  reviews: PropTypes.arrayOf(propType.review).isRequired,
  city: propType.city.isRequired,
  onOfferDetailsLoad: PropTypes.func.isRequired,
  onNearbyLoad: PropTypes.func.isRequired,
  onReviewsLoad: PropTypes.func.isRequired,
  clearOfferInfo: PropTypes.func.isRequired,
};

const mapStateToProps = ({authorizationStatus, city, reviews, offerDetails, nearbyOffers}) => ({
  authorizationStatus,
  reviews,
  city,
  offerDetails,
  nearbyOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferDetailsLoad(id) {
    dispatch(fetchOfferDetails(id));
  },
  onNearbyLoad(id) {
    dispatch(fetchNearbyList(id));
  },
  onReviewsLoad(id) {
    dispatch(fetchReviewsList(id));
  },
  clearOfferInfo() {
    dispatch(ActionCreator.clearOfferDetails());
  },
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
