import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {Cities} from '../../const';

export const getPopularOffers = (state) => state[NameSpace.DATA].popularOffers;
export const getSortedOffers = (state) => state[NameSpace.DATA].sortedOffers;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers.data;
export const getOfferDetails = (state) => state[NameSpace.DATA].offerDetails;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getDataLoadStatus = (state) => state[NameSpace.DATA].offers.isLoaded;
export const getFavoritesLoadStatus = (state) => state[NameSpace.DATA].favoriteOffers.isLoaded;
export const getOfferDetailsLoadStatus = (state) => state[NameSpace.DATA].offerDetails.isLoaded;
export const getSortedFavorites = createSelector(
  [getFavoriteOffers],
  (offers) => {
    const favoriteOffers = offers.filter(({isFavorite}) => isFavorite);
    const sortedOffers = {};
    const cities = Object.values(Cities).map(({name}) => name);

    favoriteOffers.forEach((offer) => {
      const currentCity = offer.city.name;

      if (cities.includes(currentCity.toString()) && typeof sortedOffers[currentCity] === 'undefined') {
        sortedOffers[currentCity] = [offer];
      } else {
        sortedOffers[currentCity].push(offer);
      }
    });
    return sortedOffers;
  },
);

export const getSortedReviews = createSelector(
  [getReviews],
  (reviews) => reviews.slice(0, 10).sort((a, b) => new Date(b.date) - new Date(a.date)),
);
