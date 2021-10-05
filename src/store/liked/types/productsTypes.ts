import {ItemsType} from '../../sneakers/types/productsTypes';

export enum EnumProductsLiked {
	ADD_PRODUCT_LIKED = 'ADD_PRODUCT_LIKED',
	REMOVE_PRODUCT_LIKED = 'REMOVE_PRODUCT_LIKED'
}

export interface LikedStateTypes {
	item: ItemsType[],
	id:string
}