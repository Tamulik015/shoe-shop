import {addProductsInCartActionInterface, removeProductsInCartActionInterface} from './types/actionTypes';
import {EnumProductsInCart} from './types/productsTypes';
import {ItemsType} from '../sneakers/types/productsTypes';


export const addProductInCart = (payload: ItemsType): addProductsInCartActionInterface => ({
	type: EnumProductsInCart.ADD_PRODUCT_IN_CART,
	payload
});

export const removeProductInCart = (payload: ItemsType): removeProductsInCartActionInterface => ({
	type: EnumProductsInCart.REMOVE_PRODUCT_IN_CART,
	payload
});


export type ActionType = addProductsInCartActionInterface | removeProductsInCartActionInterface;