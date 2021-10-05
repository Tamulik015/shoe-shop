import {likedProductsActionInterface, removeProductsLikedActionInterface} from './types/actionTypes';
import {EnumProductsLiked} from './types/productsTypes';
import {ItemsType} from '../sneakers/types/productsTypes';


export const likedProducts = (payload: ItemsType): likedProductsActionInterface => ({
	type: EnumProductsLiked.ADD_PRODUCT_LIKED,
	payload
});

export const removeProductLiked = (payload: ItemsType): removeProductsLikedActionInterface => ({
	type: EnumProductsLiked.REMOVE_PRODUCT_LIKED,
	payload
});


export type ActionType = likedProductsActionInterface | removeProductsLikedActionInterface;