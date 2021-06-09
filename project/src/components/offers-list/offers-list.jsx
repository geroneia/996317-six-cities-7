import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';

function OffersList({offers}) {
  // const [activeCardId, setActiveCardId] = useState('');
  return (
    <>
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </>
  );
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;
