import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import roomProp from '../room-page/room-page.types';

function OffersList({offers}) {

  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(roomProp).isRequired,
};

export default OffersList;
