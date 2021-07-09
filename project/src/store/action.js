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

export const ActionCreator = {
  changeCity: (name) => ({
    type: ActionType.CHANGE_CITY,
    payload: name,
  }),
  setSortType: (type) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: type,
  }),
  setActiveOfferId: (id) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: id,
  }),
  fillOffersList: (offers) => ({
    type: ActionType.FILL_OFFERS_LIST,
    payload: offers,
  }),
  sortOffers: (type) => ({
    type: ActionType.SORT_OFFERS,
    payload: type,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOfferDetails: (offer) => ({
    type: ActionType.LOAD_OFFER_DETAILS,
    payload: offer,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  clearOfferDetails: () => ({
    type: ActionType.CLEAR_OFFER_DETAILS,
  }),
  postReview: (review) => ({
    type: ActionType.POST_REVIEW,
    payload: review,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUserInfo: (authInfo) => ({
    type: ActionType.GET_AUTH_INFO,
    payload: authInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setMessage: (message) => ({
    type: ActionType.SET_MESSAGE,
    payload: message,
  }),
  setRating: (rating) => ({
    type: ActionType.SET_RATING,
    payload: rating,
  }),
  clearForm: () => ({
    type: ActionType.CLEAR_FORM,
  }),
};
