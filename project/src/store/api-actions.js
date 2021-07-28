import {
  loadOffers,
  loadOfferDetails,
  redirectToRoute,
  loadNearbyOffers,
  loadReviews,
  requireAuthorization,
  getAuthInfo,
  logout as closeSession,
  loadFavorites,
  toggleFavoriteStatus
} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN_INIT)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(loadFavorites(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchOfferDetails = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOfferDetails(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchNearbyList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`)
    .then(({data}) => dispatch(loadNearbyOffers(data)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(getAuthInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN_INIT)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const postReview = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadReviews(data)))
);

export const postFavoritesStatus = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => dispatch(toggleFavoriteStatus(data)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);
