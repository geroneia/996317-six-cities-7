import {app} from './app';
import {Cities} from '../../const';
import {changeCity, setActiveOfferId, setSortType} from '../action';

const cities = Object.values(Cities);
const initialState = {
  city: {
    'location': {
      'latitude': 48.8589507,
      'longitude': 2.2770205,
      'zoom': 10,
    },
    'name': 'Paris',
  },
  cities,
  sortType: 'Popular',
  activeOfferId: null,
};

describe('Reducer: app', () => {
  it('without additional parameters should return initial state', () => {
    expect(app(undefined, {}))
      .toEqual(initialState);
  });
  it('should return correct parameters of city and default sortType', () => {
    const currentCity = {
      'location': {
        'latitude': 51.2385861,
        'longitude': 6.6742686,
        'zoom': 10,
      },
      'name': 'Dusseldorf',
    };
    const name = 'Dusseldorf';

    expect(app(initialState, changeCity(name))).toEqual({...initialState, city: currentCity, sortType: 'Popular'});
  });
  it('should set new active offer`s id', () => {
    const id = 1;
    expect(app(initialState, setActiveOfferId(id))).toEqual({...initialState, activeOfferId: id});
  });
  it('should set new sort type', () => {
    const type = 'Price: low to high';
    expect(app(initialState, setSortType(type))).toEqual({...initialState, sortType: type});
  });
});
