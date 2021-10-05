import produce, {Draft} from 'immer';
import {CartStateTypes, EnumProductsInCart} from './types/productsTypes';
import {ActionType} from './actionCreator';


const initialState:CartStateTypes = {
	item: [],
	id: '',
	controlPrice: 0
}


export const cartReducers = produce((draft: Draft<CartStateTypes>, action:ActionType) => {
	switch(action.type) {
		case EnumProductsInCart.ADD_PRODUCT_IN_CART:
			draft.item = [...draft.item, action.payload];
			draft.controlPrice = Number(action.payload.price.replace(/\s/g, '')) + draft.controlPrice
			break;
		case EnumProductsInCart.REMOVE_PRODUCT_IN_CART:
			draft.item = draft.item.filter(obj => obj.id !== action.payload.id);
			draft.id = action.payload.id;
			draft.controlPrice = draft.controlPrice - Number(action.payload.price.replace(/\s/g, ''));
			break;
		default:
			return draft;
	}
}, initialState);
