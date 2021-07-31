import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import * as utils from '../../utils';

export const getSortedOffers = (state) => state[NameSpace.DATA].sortedOffers;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers.data;
export const getOfferDetails = (state) => state[NameSpace.DATA].offerDetails;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getDataLoadStatus = (state) => state[NameSpace.DATA].offers.isLoaded;
export const getFavoritesLoadStatus = (state) => state[NameSpace.DATA].favoriteOffers.isLoaded;
export const getOfferDetailsLoadStatus = (state) => state[NameSpace.DATA].offerDetails.isLoaded;
export const getErrorStatus = (state) =>  state[NameSpace.DATA].isError;
export const getConnectionStatus = (state) =>  state[NameSpace.DATA].isConnect;

export const getSortedFavorites = createSelector([getFavoriteOffers], utils.getSortedOffers);
export const getSortedReviews = createSelector([getReviews], utils.getMessages);
