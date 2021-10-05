import {all} from 'redux-saga/effects';
import {watchProducts} from './sneakers/sagas';

export function* rootSaga() {
	yield all([watchProducts()]);
}