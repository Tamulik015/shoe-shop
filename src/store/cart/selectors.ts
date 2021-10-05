import {CartStateTypes} from './types/productsTypes';
import {ItemsType} from '../sneakers/types/productsTypes';
import {RootState} from '../rootReducers';

export const selectorCart = (state: RootState): CartStateTypes => state.cartReducers;
export const selectorItem = (state: RootState): ItemsType[] => selectorCart(state).item;