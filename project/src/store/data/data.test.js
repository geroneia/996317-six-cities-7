import data from './data';
import {ActionType} from '../action';

const initialState = {
  popularOffers: [],
  sortedOffers: [],
  favoriteOffers: {
    data: [],
    isLoaded: false,
  },
  offers: {
    data: [],
    isLoaded: false,
  },
  offerDetails: {
    data: {},
    isLoaded: false,
  },
  nearbyOffers: [],
  reviews: [],
};

const testOffers =  [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 3,
    'is_pro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'is_favorite': false,
  'is_premium': true,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'max_adults': 4,
  'preview_image': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
];
const adaptedOffers =  [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.38333,
      'longitude': 4.9,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina',
  },
  'id': 1,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': false,
  'isPremium': true,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.85309666406198,
    'zoom': 8,
  },
  'maxAdults': 4,
  'previewImage': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
];

const testReviews = [{
  'comment': 'Fugiat et cupidatat irure occaecat ex.',
  'date': '2020-08-08T22:13:00.569Z',
  'id': 1,
  'rating': 4,
  'user': {
    'avatar_url': 'img/avatar-angelina.jpg',
    'id': 4,
    'is_pro': false,
    'name': 'Angelina',
  },
},
];

const adaptedReviews = [{
  'comment': 'Fugiat et cupidatat irure occaecat ex.',
  'date': '2020-08-08T22:13:00.569Z',
  'id': 1,
  'rating': 4,
  'user': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 4,
    'isPro': false,
    'name': 'Angelina',
  },
},
];
describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(initialState);
  });
  it('should update offers by load offers', () => {
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: testOffers,
    };

    expect(data(initialState, loadOffersAction))
      .toEqual({
        ...initialState,
        offers: {
          data: adaptedOffers,
          isLoaded: true,
        },
        popularOffers: [],
        sortedOffers: [],
      });
  });
  it('toggles favorite status', () => {
    const toggleFavoriteStatusAction = {
      type: ActionType.TOGGLE_FAVORITE_STATUS,
      payload: adaptedOffers,
    };

    expect(data(initialState, toggleFavoriteStatusAction))
      .toEqual({
        ...initialState,
        offers: {
          data: [adaptedOffers],
          isLoaded: true,
        },
        popularOffers: [adaptedOffers],
        sortedOffers: [adaptedOffers],
      });
  });
  it('should update favoriteOffers by load offers', () => {
    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: testOffers,
    };

    expect(data(initialState, loadFavoritesAction))
      .toEqual({
        ...initialState,
        favoriteOffers: {
          data: adaptedOffers,
          isLoaded: true,
        }});
  });
  it('should update offerDetails by load offerDetails', () => {
    const loadOfferDetailsAction = {
      type: ActionType.LOAD_OFFER_DETAILS,
      payload: testOffers,
    };

    expect(data(initialState, loadOfferDetailsAction))
      .toEqual({
        ...initialState,
        offerDetails: {
          data: adaptedOffers,
          isLoaded: true,
        }});
  });
  it('should update nearbyOffers by load offer', () => {
    const loadNearbyOffersAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: testOffers,
    };

    expect(data(initialState, loadNearbyOffersAction))
      .toEqual({
        ...initialState,
        nearbyOffers: adaptedOffers,
      });
  });
  it('should update reviews by load reviews', () => {
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: testReviews,
    };

    expect(data(initialState, loadReviewsAction))
      .toEqual({
        ...initialState,
        reviews: adaptedReviews,
      });
  });
  it('should clear offerDetails', () => {
    const clearOfferDetailsAction = {
      type: ActionType.CLEAR_OFFER_DETAILS,
    };

    expect(data(initialState, clearOfferDetailsAction))
      .toEqual({
        ...initialState,
        offerDetails: {
          data: {},
          isLoaded: false,
        },
        nearbyOffers: [],
        reviews: [],
      });
  });
  it('should fill offersList according to payload content', () => {
    const state = {
      ...initialState,
      offers: {
        data: adaptedOffers,
        isLoaded: true,
      },
    };
    const fillOffersListAction = {
      type: ActionType.FILL_OFFERS_LIST,
      payload:  'Amsterdam',
    };

    expect(data(state, fillOffersListAction))
      .toEqual({
        ...state,
        popularOffers: adaptedOffers,
        sortedOffers: adaptedOffers,
      });

    const stateWithEmptyOffersList = {
      ...initialState,
      offers: {
        data: [],
        isLoaded: false,
      },
    };

    expect(data(stateWithEmptyOffersList, fillOffersListAction))
      .toEqual({
        ...stateWithEmptyOffersList,
        popularOffers: [],
        sortedOffers: [],
      });
  });
  it('should fill sorted offers according to payload content', () => {
    const state = {
      ...initialState,
      popularOffers: adaptedOffers,
    };
    const sortOffersAction = {
      type: ActionType.SORT_OFFERS,
      payload: 'Price: high to low',
    };

    expect(data(state, sortOffersAction))
      .toEqual({
        ...state,
        sortedOffers: adaptedOffers,
      });
  });
});
