import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.APP].city;
export const getCities = (state) => state[NameSpace.APP].cities;
export const getSortType = (state) => state[NameSpace.APP].sortType;
export const getActiveOfferId = (state) => state[NameSpace.APP].activeOfferId;
