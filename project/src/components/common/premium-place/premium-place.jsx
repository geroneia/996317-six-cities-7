import React from 'react';
import PropTypes from 'prop-types';
import PremiumMark from '../premium-mark/premium-mark';

function PremiumPlace({premiumClass}) {
  return (
    <PremiumMark
      premiumClass={premiumClass}
    />
  );
}

PremiumPlace.propTypes = {
  premiumClass: PropTypes.string,
};

export default PremiumPlace;
