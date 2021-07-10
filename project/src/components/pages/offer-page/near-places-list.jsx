import React from 'react';
import NearPlace from './near-place';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';

function NearPlacesList({offers}) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => <NearPlace key={offer.id} offer={offer} />)}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default NearPlacesList;
