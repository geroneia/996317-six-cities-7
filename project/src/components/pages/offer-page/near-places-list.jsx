import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import Card from '../../card/card';
import {PlaceMark} from '../../../const';

function NearPlacesList({offers}) {
  const place = PlaceMark.PROPERTY;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            place={place}
          />
        ))}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default NearPlacesList;
