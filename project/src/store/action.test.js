import {
  redirectToRoute,
  changeCity,
  setSortType,
  setActiveOfferId,
  clearForm,
  sortOffers,
  loadOffers,
  fillOffersList,
  loadFavorites,
  loadOfferDetails,
  loadNearbyOffers,
  loadReviews,
  clearOfferDetails,
  toggleFavoriteStatus,
  requireAuthorization,
  getAuthInfo,
  logout,
  ActionType
} from './action';

describe('Actions', () => {
  it('action creator for redirecting to route returns action with correct payload', () => {
    const url =  '/:id?';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };
    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
  it('action creator for changing city returns action with correct city name', () => {
    const name =  'Paris';
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: name,
    };
    expect(changeCity(name)).toEqual(expectedAction);
  });
  it('action creator for setting sort type returns action with correct sort type', () => {
    const type =  'Popular';
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: type,
    };
    expect(setSortType(type)).toEqual(expectedAction);
  });
  it('action creator for setting active offer id returns action with correct payload', () => {
    const id =  '1';
    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: id,
    };
    expect(setActiveOfferId(id)).toEqual(expectedAction);
  });
  it('action creator for cleaning form returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.CLEAR_FORM,
    };
    expect(clearForm()).toEqual(expectedAction);
  });
  it('action creator for sorting offers returns action with correct sort type', () => {
    const type =  'Popular';
    const expectedAction = {
      type: ActionType.SORT_OFFERS,
      payload: type,
    };
    expect(sortOffers(type)).toEqual(expectedAction);
  });
  it('action creator for sorting offers returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers,
    };
    expect(loadOffers(mockOffers)).toEqual(expectedAction);
  });
  it('action creator for filling offers list returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.FILL_OFFERS_LIST,
      payload: mockOffers,
    };
    expect(fillOffersList(mockOffers)).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers list returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: mockOffers,
    };
    expect(loadFavorites(mockOffers)).toEqual(expectedAction);
  });

  it('action creator for loading offer details returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.LOAD_OFFER_DETAILS,
      payload: mockOffers,
    };
    expect(loadOfferDetails(mockOffers)).toEqual(expectedAction);
  });

  it('action creator for loading nearby offers list returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mockOffers,
    };
    expect(loadNearbyOffers(mockOffers)).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns action with correct payload', () => {
    const mockReviews = [{
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
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: mockReviews,
    };
    expect(loadReviews(mockReviews)).toEqual(expectedAction);
  });
  it('action creator for cleaning offer details returns action undefined payload', () => {
    const expectedAction = {
      type: ActionType.CLEAR_OFFER_DETAILS,
    };
    expect(clearOfferDetails()).toEqual(expectedAction);
  });
  it('action creator for toggling favorite status returns action with correct payload', () => {
    const mockOffers =  [{
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
    const expectedAction = {
      type: ActionType.TOGGLE_FAVORITE_STATUS,
      payload: mockOffers,
    };
    expect(toggleFavoriteStatus(mockOffers)).toEqual(expectedAction);
  });
  it('action creator for requiring aothorization status returns action with correct status', () => {
    const status =  'AUTH';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });
  it('action creator for getting aothorization info returns action with correct info', () => {
    const authInfo =  {
      'email': 'Oliver.conner@gmail.com',
      'password': '12345678',
    };
    const expectedAction = {
      type: ActionType.GET_AUTH_INFO,
      payload: authInfo,
    };
    expect(getAuthInfo(authInfo)).toEqual(expectedAction);
  });
  it('action creator for logout returns action undefined payload', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
});
