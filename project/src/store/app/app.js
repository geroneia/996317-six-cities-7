import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setActiveOfferId, setSortType} from '../action';
import {Cities, SortTypes, DEFAULT_CITY} from '../../const';

const cities = Object.values(Cities);

const initialState = {
  city: DEFAULT_CITY,
  cities,
  sortType: SortTypes.DEFAULT,
  activeOfferId: null,
};

const app = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = state.cities.find((city) => city.name === action.payload);
      state.sortType = SortTypes.DEFAULT;
    })
    .addCase(setActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export default app;
