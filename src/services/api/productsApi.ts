import axios from 'axios';
import {ItemsType} from '../../store/sneakers/types/productsTypes';

export const productsApi = {
	async fetchProductsApi (): Promise<ItemsType[]>{
		const response = await axios.get('http://localhost:3001/items');
		return response.data;
	}
}