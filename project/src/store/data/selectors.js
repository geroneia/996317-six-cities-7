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

export const getFavoritesLength = (state) => state[NameSpace.DATA].favoriteOffers.data.length;
export const getSortedFavorites = createSelector(
  [getFavoriteOffers],
  (favoriteOffers) => {
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
