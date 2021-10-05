import {Action} from 'redux';
import {EnumProductsType, InitialStateTypes} from './productsTypes';


export interface productsFetchActionInterface extends Action<EnumProductsType> {
	type: EnumProductsType.FETCH_ITEMS
};

export interface productsFetchSuccessActionInterface extends Action<EnumProductsType> {
	type: EnumProductsType.FETCH_ITEMS_SUCCESS,
	payload: InitialStateTypes['items']
}

export interface productsFetchErrorActionInterface extends Action<EnumProductsType> {
	type: EnumProductsType.FETCH_ITEMS_ERROR,
	payload: string
}


