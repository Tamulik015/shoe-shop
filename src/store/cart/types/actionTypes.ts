import {Action} from 'redux';
import {EnumProductsInCart} from './productsTypes';
import {ItemsType} from '../../sneakers/types/productsTypes';



export interface addProductsInCartActionInterface extends Action<EnumProductsInCart> {
	type: EnumProductsInCart.ADD_PRODUCT_IN_CART,
	payload: ItemsType
}

export interface removeProductsInCartActionInterface extends Action<EnumProductsInCart> {
	type: EnumProductsInCart.REMOVE_PRODUCT_IN_CART,
	payload: ItemsType
}



