import {takeEvery, call, put} from 'redux-saga/effects';
import {EnumProductsType} from './types/productsTypes';
import {productsApi} from '../../services/api/productsApi';
import {productsFetchSuccess, productsFetchError} from './actionCreator';
import {config} from '../../config';

export function* fetchProducts():any {
	try {
		const data = yield call(productsApi.fetchProductsApi);
		yield put(productsFetchSuccess(data));
	}catch(e) {
		yield put(productsFetchError(config.errorApi));
	}
}

export function* watchProducts () {
	yield takeEvery(EnumProductsType.FETCH_ITEMS, fetchProducts)
}