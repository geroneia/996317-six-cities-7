import {DEFAULT_CITY, AuthorizationStatus} from '../const';
import {ActionType} from './action';
import {adaptToClient, getCityOffers, getSortAction, getInitialOffers} from '../utils';
import {Cities, SortTypes} from '../const';

const cities = Object.values(Cities);

const initialState = {
  city: DEFAULT_CITY,
  popularOffers: [],
  sortedOffers: [],
  offers: {
    data: [],
    isDataLoaded: false,
  },
  offerDetails: {
    data: {},
    isDataLoaded: false,
  },
  nearbyOffers: [],
  reviews: [],
  cities,
  sortType: SortTypes.DEFAULT,
  activeOfferId: null,
  isDataLoaded: {
    offers: false,
  },
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
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
        popularOffers: getCityOffers(state.offers.data, action.payload),
        sortedOffers: state.popularOffers,
      };
    case ActionType.LOAD_OFFER_DETAILS:
      return {
        ...state,
        offerDetails: {
          data: adaptToClient(action.payload),
          isDataLoaded: true,
        },
      };
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: adaptToClient(action.payload),
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: adaptToClient(action.payload),
      };
    case ActionType.CLEAR_OFFER_DETAILS:
      return {
        ...state,
        offerDetails: {
          data: {},
          isDataLoaded: false,
        },
        nearbyOffers: [],
        reviews: [],
      };
    case ActionType.SET_MESSAGE:
      return {
        ...state,
        commentPost: {
          ...state.commentPost,
          comment: action.payload,
        },
      };
    case ActionType.SET_RATING:
      return {
        ...state,
        commentPost: {
          ...state.commentPost,
          rating: action.payload,
        },
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortedOffers: getSortAction(state.popularOffers, action.payload),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: {
          data: adaptToClient(action.payload),
          isDataLoaded: true,
        },
        popularOffers: getInitialOffers(action.payload),
        sortedOffers: getInitialOffers(action.payload),
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_AUTH_INFO:
      return {
        ...state,
        authInfo: adaptToClient(action.payload),
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
