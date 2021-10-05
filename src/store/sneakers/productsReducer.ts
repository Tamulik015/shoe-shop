import produce, {Draft} from 'immer';
import {InitialStateTypes, EnumProductsType} from './types/productsTypes';
import {ActionType} from './actionCreator';


const initialState:InitialStateTypes = {
	items:[],
	isLoading: false,
	error: ''
}

export const productsReducer = produce((draft: Draft<InitialStateTypes>, action:ActionType) => {
	switch(action.type) {
		case EnumProductsType.FETCH_ITEMS:
			draft.items = [];
			draft.isLoading = true;
			draft.error = '';
			break;
		case EnumProductsType.FETCH_ITEMS_SUCCESS:
			draft.items = action.payload;
			draft.isLoading = false;
			draft.error = '';
			break;
		case EnumProductsType.FETCH_ITEMS_ERROR:
			draft.items = [];
			draft.isLoading = false;
			draft.error = action.payload;
			break;
		default:
			return draft;
	}
}, initialState);

