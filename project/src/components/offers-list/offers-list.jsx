import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';

function OffersList({offers, onOfferChange}) {
  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onOfferChange={onOfferChange}
        />))}
    </>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
  onOfferChange: PropTypes.func.isRequired,
};

export default OffersList;
