import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortTypes} from '../../../const';

const types = Object.values(SortTypes);

function Sort({sortType, onSortChange}) {
  const [opened, setOpened] = useState(false);
  const handleMenuClick = () => setOpened(true);
  const handleSortClick = ({target: {dataset : {type}}}) => {
    onSortChange(type);
    setOpened(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={handleMenuClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {opened && (
        <ul className="places__options places__options--custom places__options--opened">
          {types.map((type) => (
            <li
              key={type}
              className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
              tabIndex="0"
              data-type={type}
              onClick={handleSortClick}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default Sort;
