import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'app/changeCity',
  FILL_OFFERS_LIST: 'app/fillOffersList',
  SET_SORT_TYPE: 'app/setSortType',
  SORT_OFFERS: 'app/sortOffers',
  SET_ACTIVE_OFFER: 'app/setActiveOffer',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER_DETAILS: 'data/loadOfferDetails',
  LOAD_NEARBY_OFFERS: 'data/loadNerbyOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  POST_REVIEW: 'data/postReview',
  CLEAR_OFFER_DETAILS: 'data/clearOfferDetails',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  GET_AUTH_INFO: 'user/getAuthtInfo',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
  SET_MESSAGE: 'app/setMessage',
  SET_RATING: 'app/setRating',
  CLEAR_FORM: 'app/clearForm',
};


export const changeCity = createAction(ActionType.CHANGE_CITY, (name) => ({
  payload: name,
}));

export const setSortType = createAction(ActionType.SET_SORT_TYPE, (type) => ({
  payload: type,
}));

export const setActiveOfferId = createAction(ActionType.SET_ACTIVE_OFFER, (id) => ({
  payload: id,
}));

export const fillOffersList = createAction(ActionType.FILL_OFFERS_LIST, (offers) => ({
  payload: offers,
}));

export const sortOffers = createAction(ActionType.SORT_OFFERS, (type) => ({
  payload: type,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
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

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const getAuthInfo = createAction(ActionType.GET_AUTH_INFO, (authInfo) => ({
  payload: authInfo,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const clearForm = createAction(ActionType.CLEAR_FORM);
