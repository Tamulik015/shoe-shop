import {LikedStateTypes} from './types/productsTypes';
import {ItemsType} from '../sneakers/types/productsTypes';
import {RootState} from '../rootReducers';

export const selectorLiked = (state: RootState): LikedStateTypes => state.likedReducers;
export const selectorItems = (state: RootState): ItemsType[] => selectorLiked(state).item;