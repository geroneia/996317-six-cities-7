import {MAX_RATING, CITIES} from './const';

export const getRatingInPercent = (rating) =>
  `${rating * 100 / MAX_RATING}%`;

export const getType = (type) =>
  type[0].toUpperCase() + type.slice(1);


const changeCase = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {

      const newKey = key.replace(/_\w/, (match, offset, input) => input[offset+1].toUpperCase());
      if (key !== newKey) {
        Object.defineProperty(obj, newKey,
          Object.getOwnPropertyDescriptor(obj, key));
        delete obj[key];
      }
    } else {
      changeCase(obj[key]);
    }
  }
  return obj;
};


export const adaptToClient = (data) => {
  const transformedObj = JSON.parse(JSON.stringify(data));
  changeCase(transformedObj);
  return transformedObj;
};

export const sortOffersByTown = (arr) => {
  const sortedOffers = {};

  arr.forEach((obj) => {
    const currentCity = obj.city.name;

    if (CITIES.includes(currentCity.toString())&& sortedOffers[currentCity] ===  undefined) {
      sortedOffers[currentCity] = [];
      sortedOffers[currentCity].push(obj);
    } else {
      sortedOffers[currentCity].push(obj);
    }
  });
  return sortedOffers;
};
