import React from 'react';
import PropTypes from 'prop-types';
import * as propType from '../../prop-types';
import City from '../city/city';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function CitiesList({city, cities, onChange}) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((el) => (
          <City
            key={el.name}
            name={el.name}
            isActive={el.name === city.name}
            onChange = {onChange}
          />
        ))}
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  city: propType.city.isRequired,
  cities: PropTypes.arrayOf(propType.city).isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onChange(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
