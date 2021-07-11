import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PageHeader from '../../common/page-header/page-header';
import Gallery from './gallery';
import ReviewsList from '../../reviewes/review-list/review-list';
import Form from '../../form/form';
import Host from './host';
import {getRatingInPercent, getType}from '../../../utils';
import * as propType from '../../../prop-types';
import PropTypes from 'prop-types';
import Map from '../../map/map';
import NearPlacesList from './near-places-list';
import {fetchOfferDetails, fetchNearbyList, fetchReviewsList} from '../../../store/api-actions';
import {AuthorizationStatus} from '../../../const';
import LoadingPage from '../loading-page/loading-page';
import {clearOfferDetails} from '../../../store/action';
import PremiumMark from '../../common/premium-mark/premium-mark';
import {PlaceMark} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getReviews, getOfferDetails, getNearbyOffers} from '../../../store/data/selectors';
import {getCity, getActiveOfferId} from '../../../store/app/selectors';

function OfferPage(props) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const reviews = useSelector(getReviews);
  const city = useSelector(getCity);
  const {data, isLoaded} = useSelector(getOfferDetails);
  const nearbyOffers = useSelector(getNearbyOffers);
  const activeOfferId = useSelector(getActiveOfferId);
  const {id} = props;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchOfferDetails(id));
    dispatch(fetchNearbyList(id));
    dispatch(fetchReviewsList(id));
    return () => {
      dispatch(clearOfferDetails());
    };
  }, [
    id,
    dispatch,
  ]);

  if (!isLoaded) {
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
    isPremium,
  } = data;

  const mark = PlaceMark.PROPERTY;

  return (
    <div className="page" key={id}>
      <PageHeader/>
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery images={images} type={type} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <PremiumMark mark={mark} />
              )}
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
              <Host host={host} description={description} />
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
            <Map
              city={city}
              offers={nearbyOffers.concat(data)}
              key={city.name}
              activeOfferId={activeOfferId}
            />
          </section>
        </section>
        <div className="container">
          <NearPlacesList offers={nearbyOffers} />
        </div>
      </main>
    </div>
  );
}

OfferPage.propTypes = {
  id: PropTypes.number.isRequired,
  offerDetails: PropTypes.shape({
    data: propType.offer,
    isLoaded: PropTypes.bool.isRequired,
  }),
};

export default OfferPage;
