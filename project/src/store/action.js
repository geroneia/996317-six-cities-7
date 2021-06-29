export const ActionType = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS_LIST: 'FILL_OFFERS_LIST',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SORT_OFFERS: 'SORT_OFFERS',
  SET_ACTIVE_OFFER: 'SET_ACTIVE_OFFER',
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
};
