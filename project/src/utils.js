import {
  RATINGS,
  Cities,
  SortTypes,
  AuthorizationStatus,
  DEFAULT_CITY,
  MAX_COUNT_REVIEWS,
  SHAKE_ANIMATION_TIMEOUT,
  MILLISECONDS_IN_SECOND,
  MIN_MESAGE_LENGTH,
  MAX_MESSAGE_LENGTH
} from './const';

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

export const getAdaptedReviews = (reviews) => reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).slice(0, MAX_COUNT_REVIEWS);

export const validateId = (id) => !id || id === ':id' || Object.keys(Cities).includes(id.toUpperCase());

export const shake = (target) => {
  target.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / MILLISECONDS_IN_SECOND}s`;
  setTimeout(() => {
    target.style.animation = '';
  }, SHAKE_ANIMATION_TIMEOUT);
};

export const validateMessage = (text) => !!text.length && text.length >= MIN_MESAGE_LENGTH && text.length <= MAX_MESSAGE_LENGTH;

export const validateEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

export const validatePassword = (password) => !!password.trim();
