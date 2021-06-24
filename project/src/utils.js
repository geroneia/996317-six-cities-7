import {RATINGS, Cities} from './const';

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
  const cities = [];
  Object.values(Cities).forEach((el) => {cities.push(el.name);
  });

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

export const getCityOffers = (offers, name) => {
  const sortedOffers = [];
  offers.forEach((offer) => {
    if(offer.city.name === name) {
      sortedOffers.push(offer);
    }
  });
  return sortedOffers;
};

export const getDateTime = (dateInISO) => dateInISO.split('T')[0];

export const getDate = (dateInISO) => new Date(dateInISO).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
