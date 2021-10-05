import {productsFetchActionInterface, productsFetchSuccessActionInterface, productsFetchErrorActionInterface} from './types/actionTypes';
import {EnumProductsType, InitialStateTypes} from './types/productsTypes';



export const productsFetch = (): productsFetchActionInterface => ({
	type: EnumProductsType.FETCH_ITEMS
});

export const productsFetchSuccess = (payload: InitialStateTypes['items']): productsFetchSuccessActionInterface => ({
	type: EnumProductsType.FETCH_ITEMS_SUCCESS,
	payload
});

export const productsFetchError = (payload: string): productsFetchErrorActionInterface => ({
	type: EnumProductsType.FETCH_ITEMS_ERROR,
	payload
});



export type ActionType = productsFetchActionInterface | productsFetchSuccessActionInterface | productsFetchErrorActionInterface;