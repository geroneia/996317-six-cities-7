import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {PlaceMark} from '../../../const';

function PremiumMark({mark}) {
  return (
    <div
      className={cx({
        'place-card__mark': mark === PlaceMark.PLACE_CARD,
        'property__mark': mark === PlaceMark.PROPERTY,
      })}
    >
      <span>Premium</span>
    </div>
  );
}

PremiumMark.propTypes = {
  mark: PropTypes.string,
};

export default PremiumMark;
