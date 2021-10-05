import {combineReducers} from 'redux';
import {productsReducer} from './sneakers/productsReducer';
import {cartReducers} from './cart/cartReducers';
import {likedReducers} from './liked/likedReducers';


export const rootReducers = combineReducers({
	productsReducer,
	cartReducers,
	likedReducers
});

export type RootState = ReturnType<typeof rootReducers>