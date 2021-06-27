import React from 'react';
import PropTypes from 'prop-types';
import SortType from '../../const';

function Sort({sortType}) {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex="0">{SortType.DEFAULT}</li>
        <li className="places__option" tabIndex="0">{SortType.PRICE_LOW_HIGH}</li>
        <li className="places__option" tabIndex="0">{SortType.PRICE_HIGH_LOW}</li>
        <li className="places__option" tabIndex="0">{SortType.TOP_RATED}</li>
      </ul>
    </form>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
};

export default Sort;
