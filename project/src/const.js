export const AppRoute = {
  MAIN: '/:id?',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer',
  NOT_FOUND: '/notFound',
};

export const RATINGS = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export const Cities = {
  PARIS: {
    'location': {
      'latitude': 48.8589507,
      'longitude': 2.2770205,
      'zoom': 10,
    },
    'name': 'Paris',
  },
  COLOGNE: {
    'location': {
      'latitude': 50.9578353,
      'longitude': 6.8272407,
      'zoom': 10,
    },
    'name': 'Cologne',
  },
  BRUSSELS: {
    'location': {
      'latitude': 50.8550625,
      'longitude': 4.3053506,
      'zoom': 10,
    },
    'name': 'Brussels',
  },
  AMSTERDAM: {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  HAMBURG: {
    'location': {
      'latitude': 53.5586941,
      'longitude': 9.7877401,
      'zoom': 10,
    },
    'name': 'Hamburg',
  },
  DUSSELDORF: {
    'location': {
      'latitude': 51.2385861,
      'longitude': 6.6742686,
      'zoom': 10,
    },
    'name': 'Dusseldorf',
  },
};

export const DEFAULT_CITY = Cities.PARIS;

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const SortTypes = {
  DEFAULT: 'Popular',
  PRICE_LOW_HIGH: 'Price: low to high',
  PRICE_HIGH_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  REVIEWS: '/comments',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};
