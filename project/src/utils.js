import {MAX_RATING} from './const';

export const getRatingInPercent = (rating) =>
  `${rating * 100 / MAX_RATING}%`;

export const getType = (type) =>
  type[0].toUpperCase() + type.slice(1);
