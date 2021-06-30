import React from 'react';
import {connect} from 'react-redux';
import PageHeader from '../../common/page-header/page-header';
import OffersList from '../../offers-list/offers-list';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import Map from '../../map/map';
import CitiesList from '../../cities-list/cities-list';
import {useParams} from 'react-router-dom';
import {ActionCreator} from '../../../store/action';
import Sort from '../../sort/sort';

function MainPage({city, city: {name}, sortedOffers, onChange, cities, sortType, onSortChange, activeOfferId, onOfferChange}) {
  const {id} = useParams();
  if (id !== name && typeof id !== 'undefined') {
    onChange(id);
  }
  return (
    <div className="page page--gray page--main">
      <PageHeader/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city} cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {name}</b>
              <Sort sortType={sortType} onSortChange={onSortChange} />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortedOffers} onOfferChange={onOfferChange} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={sortedOffers} key={city.name} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  sortedOffers: PropTypes.arrayOf(propType.offer).isRequired,
  city: propType.city.isRequired,
  cities: PropTypes.arrayOf(propType.city).isRequired,
  onChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
  activeOfferId: PropTypes.number.isRequired,
  onOfferChange: PropTypes.func.isRequired,
};

const mapStateToProps = ({sortedOffers, city, cities, sortType, activeOfferId}) => ({
  sortedOffers,
  city,
  cities,
  sortType,
  activeOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  onChange(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.fillOffersList(city));
  },
  onSortChange(type) {
    dispatch(ActionCreator.setSortType(type));
    dispatch(ActionCreator.sortOffers(type));
  },
  onOfferChange(id) {
    dispatch(ActionCreator.setActiveOfferId(id));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
