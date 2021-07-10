import React from 'react';
import PropTypes from 'prop-types';

function PremiumMark({premiumClass}) {
  return (
    <div className={`${premiumClass}__mark`}>
      <span>Premium</span>
    </div>
  );
}

PremiumMark.propTypes = {
  premiumClass: PropTypes.string,
};

export default PremiumMark;
