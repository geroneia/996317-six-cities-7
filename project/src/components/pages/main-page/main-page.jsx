import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../common/header/header';
import OffersList from '../main-page/offers-list';
import Map from '../../map/map';
import CitiesList from './cities-list';
import NotFoundPage from '../not-found-page/not-found-page';
import {useParams} from 'react-router-dom';
import {changeCity, fillOffersList, setSortType, sortOffers, setActiveOfferId} from '../../../store/action';
import Sort from './sort';
import {getSortedOffers} from '../../../store/data/selectors';
import {getCity, getCities, getSortType, getActiveOfferId} from '../../../store/app/selectors';
import {validateId} from '../../../utils';
import PlacesEmptyList from './places-empty-list';

function MainPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const sortedOffers = useSelector(getSortedOffers);
  const cities = useSelector(getCities);
  const sortType = useSelector(getSortType);
  const activeOfferId = useSelector(getActiveOfferId);
  const onSortChange = (type) => {
    dispatch(setSortType(type));
    dispatch(sortOffers(type));
  };
  const onOfferChange = (activeId) => {
    dispatch(setActiveOfferId(activeId));
  };

  useEffect(() => {
    if (typeof id !== 'undefined' && validateId(id) && id !== city.name) {
      dispatch(changeCity(id));
      dispatch(fillOffersList(id));
    }
  }, [id, city.name, dispatch]);

  if (typeof id === 'undefined' || !validateId) {
    return <NotFoundPage />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city} cities={cities} />
        </div>
        <div className="cities">
          {!sortedOffers.length ? (
            <PlacesEmptyList name={city.name} />
          ) : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortedOffers.length} places to stay in {city.name}</b>
                <Sort sortType={sortType} onSortChange={onSortChange} />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={sortedOffers} onOfferChange={onOfferChange} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={city}
                    offers={sortedOffers}
                    key={city.name}
                    activeOfferId={activeOfferId}
                  />
                </section>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
