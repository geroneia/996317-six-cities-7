import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';

function OffersList({offers}) {
  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(propType.offer).isRequired,
};

export default OffersList;
