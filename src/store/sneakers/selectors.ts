import {InitialStateTypes} from './types/productsTypes';
import {RootState} from '../rootReducers';

export const selectorItems = (state: RootState): InitialStateTypes => state.productsReducer;