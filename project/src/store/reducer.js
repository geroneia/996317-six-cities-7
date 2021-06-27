import {DEFAULT_CITY} from '../const';
import {ActionType} from './action';
import {adaptToClient, getCityOffers} from '../utils';
import mockOffers from '../mocks/offers';
import {mockReviews} from '../mocks/reviews';
import {Cities} from '../const';

const offers = adaptToClient(mockOffers);
const reviews = adaptToClient(mockReviews);
const cities = Object.values(Cities);
const popularOffers = getCityOffers(offers, DEFAULT_CITY.name);

const initialState = {
  city: DEFAULT_CITY,
  popularOffers,
  offers,
  reviews,
  cities,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: state.cities.find((city) => city.name === action.payload),
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        popularOffers: getCityOffers(offers, state.city),
      };
    default:
      return state;
  }
};

export {reducer};
