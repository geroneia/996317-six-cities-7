import {MAX_RATING, CITIES} from './const';

export const getRatingInPercent = (rating) =>
  `${rating * 100 / MAX_RATING}%`;

export const getType = (type) =>
  type[0].toUpperCase() + type.slice(1);

const getChangedCase = (data) => {
  for (const key in data) {
    if (typeof data[key] !== 'object' && data[key] !== null) {
      const newKey = key.replace(/_\w/, (match, offset, input) => input[offset + 1].toUpperCase());
      if (key !== newKey) {
        Object.defineProperty(data, newKey, Object.getOwnPropertyDescriptor(data, key));
        delete data[key];
      }
    } else {
      getChangedCase(data[key]);
    }
  }
  return data;
};

export const adaptToClient = (data) => getChangedCase(JSON.parse(JSON.stringify(data)));

export const sortOffersByTown = (offers) => {
  const favoriteOffers = offers.filter(({isFavorite}) => isFavorite);
  const sortedOffers = {};

  favoriteOffers.forEach((offer) => {
    const currentCity = offer.city.name;

    if (CITIES.includes(currentCity.toString()) && typeof sortedOffers[currentCity] === 'undefined') {
      sortedOffers[currentCity] = [offer];
    } else {
      sortedOffers[currentCity].push(offer);
    }
  });
  return sortedOffers;
};
