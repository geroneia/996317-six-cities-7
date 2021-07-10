import {createReducer} from '@reduxjs/toolkit';
import {loadOffers, loadOfferDetails, loadNearbyOffers, loadReviews, clearOfferDetails, fillOffersList, sortOffers} from '../action';
import {adaptToClient,getInitialOffers, getCityOffers, getSortAction} from '../../utils';

const initialState = {
  popularOffers: [],
  sortedOffers: [],
  offers: {
    data: [],
    isLoaded: false,
  },
  offerDetails: {
    data: {},
    isLoaded: false,
  },
  nearbyOffers: [],
  reviews: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = {
        data: adaptToClient(action.payload),
        isLoaded: true,
      };
      state.popularOffers = getInitialOffers(action.payload);
      state.sortedOffers = getInitialOffers(action.payload);
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = {
        data: adaptToClient(action.payload),
        isLoaded: true,
      };
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = adaptToClient(action.payload);
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = adaptToClient(action.payload);
    })
    .addCase(clearOfferDetails, (state, action) => {
      state.offerDetails = {
        data: {},
        isLoaded: false,
      };
      state.nearbyOffers = [];
      state.reviews = [];
    })
    .addCase(fillOffersList, (state, action) => {
      state.popularOffers = getCityOffers(state.offers.data, action.payload);
      state.sortedOffers = state.popularOffers;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortedOffers = getSortAction(state.popularOffers, action.payload);
    });
});

export {data};
