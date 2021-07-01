import {DEFAULT_CITY, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {adaptToClient, getCityOffers, getSortAction, getInitialOffers} from '../utils';
import {mockReviews} from '../mocks/reviews';
import {Cities, SortTypes} from '../const';

const reviews = adaptToClient(mockReviews);
const cities = Object.values(Cities);

const initialState = {
  city: DEFAULT_CITY,
  popularOffers: [],
  sortedOffers: [],
  offers: [],
  reviews,
  cities,
  sortType: SortTypes.DEFAULT,
  activeOfferId: 0,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
        popularOffers: getCityOffers(state.offers, action.payload),
        sortedOffers: state.popularOffers,
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortedOffers: getSortAction(state.popularOffers, action.payload),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptToClient(action.payload),
        popularOffers: getInitialOffers(action.payload),
        sortedOffers: getInitialOffers(action.payload),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
