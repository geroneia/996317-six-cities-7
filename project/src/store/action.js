import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
  CHANGE_CITY: 'app/changeCity',
  SET_SORT_TYPE: 'app/setSortType',
  SET_ACTIVE_OFFER: 'app/setActiveOffer',
  CLEAR_FORM: 'app/clearForm',
  SORT_OFFERS: 'data/sortOffers',
  LOAD_OFFERS: 'data/loadOffers',
  FILL_OFFERS_LIST: 'data/fillOffersList',
  LOAD_FAVORITES: 'data/loadFavorites',
  LOAD_OFFER_DETAILS: 'data/loadOfferDetails',
  LOAD_NEARBY_OFFERS: 'data/loadNerbyOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  CLEAR_OFFER_DETAILS: 'data/clearOfferDetails',
  TOGGLE_FAVORITE_STATUS: 'data/toggleFavoriteStatus',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  GET_AUTH_INFO: 'user/getAuthtInfo',
  LOGOUT: 'user/logout',
};


export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const changeCity = createAction(ActionType.CHANGE_CITY, (name) => ({
  payload: name,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (type) => ({
  payload: type,
}));

export const setActiveOfferId = createAction(ActionType.SET_ACTIVE_OFFER, (id) => ({
  payload: id,
}));

export const clearForm = createAction(ActionType.CLEAR_FORM);

export const sortOffers = createAction(ActionType.SORT_OFFERS, (type) => ({
  payload: type,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const fillOffersList = createAction(ActionType.FILL_OFFERS_LIST, (name) => ({
  payload: name,
}));

export const loadFavorites = createAction(ActionType.LOAD_FAVORITES, (offers) => ({
  payload: offers,
}));

export const loadOfferDetails = createAction(ActionType.LOAD_OFFER_DETAILS, (offer) => ({
  payload: offer,
}));

export const loadNearbyOffers = createAction(ActionType.LOAD_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const clearOfferDetails = createAction(ActionType.CLEAR_OFFER_DETAILS);

export const toggleFavoriteStatus = createAction(ActionType.TOGGLE_FAVORITE_STATUS, (offer) => ({
  payload: offer,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const getAuthInfo = createAction(ActionType.GET_AUTH_INFO, (authInfo) => ({
  payload: authInfo,
}));

export const logout = createAction(ActionType.LOGOUT);
