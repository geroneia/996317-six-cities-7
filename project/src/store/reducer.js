import {DEFAULT_CITY} from '../const';
import {ActionType} from './action';
import {adaptToClient, getCityOffers, getSortAction} from '../utils';
import mockOffers from '../mocks/offers';
import {mockReviews} from '../mocks/reviews';
import {Cities, SortTypes} from '../const';

const offers = adaptToClient(mockOffers);
const reviews = adaptToClient(mockReviews);
const cities = Object.values(Cities);
const popularOffers = getCityOffers(offers, DEFAULT_CITY.name);

const initialState = {
  city: DEFAULT_CITY,
  popularOffers,
  sortedOffers: popularOffers,
  offers,
  reviews,
  cities,
  sortType: SortTypes.DEFAULT,
  activeOfferId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: state.cities.find((city) => city.name === action.payload),
        sortType: SortTypes.DEFAULT,
      };
    case ActionType.SET_ACTIVE_OFFER:
      return {
        ...state,
        activeOfferId: action.payload,
      };
    case ActionType.SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        popularOffers: getCityOffers(offers, action.payload),
        sortedOffers: state.popularOffers,
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortedOffers: getSortAction(state.popularOffers, action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
