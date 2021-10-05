import {Action} from 'redux';
import {EnumProductsLiked} from './productsTypes';
import {ItemsType} from '../../sneakers/types/productsTypes';



export interface likedProductsActionInterface extends Action<EnumProductsLiked> {
	type: EnumProductsLiked.ADD_PRODUCT_LIKED,
	payload: ItemsType
}

export interface removeProductsLikedActionInterface extends Action<EnumProductsLiked> {
	type: EnumProductsLiked.REMOVE_PRODUCT_LIKED,
	payload: ItemsType
}



