export enum EnumProductsType {
	FETCH_ITEMS = 'FETCH_ITEMS',
	FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
	FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
	FETCH_TEXT = 'FETCH_TEXT'
}

export interface ItemsType {
	id: string,
	imageURL: string,
	name: string,
	price: string
}

export interface InitialStateTypes {
	items:ItemsType[],
	isLoading: boolean,
	error:string
}


