import {DEFAULT_CITY} from '../const';
import {ActionType} from './action';
import {adaptToClient} from '../utils';
import mockOffers from '../mocks/offers';
import {mockReviews} from '../mocks/reviews';
import {Cities} from '../const';

const offers = adaptToClient(mockOffers);
const reviews = adaptToClient(mockReviews);
const cities = Object.values(Cities);

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  reviews: reviews,
  cities: cities,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: state.cities.find((city) => city.name === action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
