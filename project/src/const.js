export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const RATINGS = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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

export const DEFAULT_CITY = Cities[0];

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';
