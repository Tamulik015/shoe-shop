import {ItemsType} from '../../sneakers/types/productsTypes';

export enum EnumProductsInCart {
	ADD_PRODUCT_IN_CART = 'ADD_PRODUCT_IN_CART',
	REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART'
}

export interface CartStateTypes {
	item: ItemsType[],
	id:string,
	controlPrice: number
}