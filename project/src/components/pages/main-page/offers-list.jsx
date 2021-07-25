import React from 'react';
import Card from '../../card/card';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import {PlaceMark} from '../../../const';

function OffersList({offers, onOfferChange}) {
  const place = PlaceMark.PLACE_CARD;
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={`${place}:${offer.id}`}
          offer={offer}
          onOfferChange={onOfferChange}
          place={place}
        />
      ))}
    </>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
  onOfferChange: PropTypes.func.isRequired,
};

export default OffersList;
