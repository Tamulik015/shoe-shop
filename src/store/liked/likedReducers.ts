import produce, {Draft} from 'immer';
import {LikedStateTypes, EnumProductsLiked} from './types/productsTypes';
import {ActionType} from './actionCreator';


const initialState:LikedStateTypes = {
	item: [],
	id: ''
}


export const likedReducers = produce((draft: Draft<LikedStateTypes>, action:ActionType) => {
	switch(action.type) {
		case EnumProductsLiked.ADD_PRODUCT_LIKED:
			draft.item = [...draft.item, action.payload];
			break;
		case EnumProductsLiked.REMOVE_PRODUCT_LIKED:
			draft.item = draft.item.filter(obj => obj.id !== action.payload.id);
			draft.id = action.payload.id;
			break;
		default:
			return draft;
	}
}, initialState);
