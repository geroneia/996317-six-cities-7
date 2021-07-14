import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../../prop-types';
import {Link} from 'react-router-dom';

function CitiesList({city, cities}) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map(({name}) => (
          <li className="locations__item"
            key={name}
          >
            <Link
              className={`${name === city.name && 'tabs__item--active'} locations__item-link tabs__item`}
              to={`/${name}`}
            >
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  city: propType.city.isRequired,
  cities: PropTypes.arrayOf(propType.city).isRequired,
};

export default CitiesList;
