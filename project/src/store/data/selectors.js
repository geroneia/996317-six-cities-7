import {NameSpace} from '../root-reducer';

export const getPopularOffers = (state) => state[NameSpace.DATA].popularOffers;
export const getSortedOffers = (state) => state[NameSpace.DATA].sortedOffers;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getOfferDetails = (state) => state[NameSpace.DATA].offerDetails;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getDataLoadStatus = (state) => state[NameSpace.DATA].offers.isLoaded;
export const getFavoritesLoadStatus = (state) => state[NameSpace.DATA].favoriteOffers.isLoaded;
