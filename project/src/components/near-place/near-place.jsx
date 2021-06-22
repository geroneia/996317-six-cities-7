import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';
import Card from '../card/card';

function NearPlace(props) {
  const {className = '', ...offer} = props;
  return (
    <Card
      className={`near-places__card ${className}`}
      {...offer}
    />
  );
}

NearPlace.propTypes = {
  offer: propType.offer,
  className: PropTypes.string,
};

export default NearPlace;
