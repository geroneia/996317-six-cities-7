import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {APIRoute} from '../const';
import {
  fetchFavoritesList,
  fetchOfferDetails,
  fetchNearbyList,
  fetchReviewsList,
  postReview,
  postFavoritesStatus
} from './api-actions';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOfferLoader = fetchFavoritesList();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [{fake: true}]);

    return favoriteOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offerDetailsLoader = fetchOfferDetails(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}`)
      .reply(200, [{fake: true}]);

    return offerDetailsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER_DETAILS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a correct API call to GET /nearby/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const nearbyListLoader = fetchNearbyList(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
      .reply(200, [{fake: true}]);

    return nearbyListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a correct API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchReviewsList(id);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a correct API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {email: 'Oliver.conner@gmail.com', password: '123456'};
    const id = 1;
    const reviewLoader = postReview(id, fakeComment);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{fake: true}]);

    return reviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a correct API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const statusLoader = postFavoritesStatus(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, [{fake: true}]);

    return statusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.TOGGLE_FAVORITE_STATUS,
          payload: [{fake: true}],
        });
      });
  });
});
