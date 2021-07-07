import {RATINGS, Cities, SortTypes, AuthorizationStatus, DEFAULT_CITY} from './const';

export const getRatingInPercent = (rating) =>
  `${rating * 100 / RATINGS.length}%`;

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
};

export const getCityOffers = (offers, name) => offers.filter(({city}) => city.name === name);

export const getDateTime = (dateInISO) => dateInISO.split('T')[0];

export const getDate = (dateInISO) => new Date(dateInISO).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const getSortedLowToHighPrice = (offers) => offers.sort((a, b) => a.price - b.price);

const getSortedHighToLowPrice = (offers) => offers.sort((a, b) => b.price - a.price);

const getSortedHighToLowRating = (offers) => offers.sort((a, b) => b.rating - a.rating);

export const getSortAction = (offers, type) => {
  switch (type) {
    case SortTypes.PRICE_LOW_HIGH:
      return getSortedLowToHighPrice(offers);
    case SortTypes.PRICE_HIGH_LOW:
      return getSortedHighToLowPrice(offers);
    case SortTypes.TOP_RATED:
      return getSortedHighToLowRating(offers);
    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const getInitialOffers = (data) => getCityOffers(adaptToClient(data), DEFAULT_CITY.name);
