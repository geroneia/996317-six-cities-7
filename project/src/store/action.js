export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS_LIST: 'FILL_OFFERS_LIST',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SORT_OFFERS: 'SORT_OFFERS',
  SET_ACTIVE_OFFER: 'SET_ACTIVE_OFFER',
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOAD_REVIEWS: 'LOAD_REVIEWS',
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  GET_AUTH_INFO: 'GET_AUTH_INFO',
  LOGOUT: 'LOGOUT',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
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
};
