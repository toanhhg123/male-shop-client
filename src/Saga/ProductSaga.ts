import { ListReponse } from 'src/Models/Commom';
import { PayloadAction } from '@reduxjs/toolkit';
import { ListParams } from './../Models/Commom';
import { Product } from 'src/Models/Product';
import {
    getProductsRequest,
    getProductsSuccess,
    getProductsFailure,
} from 'src/features/ProductSlice';
import { takeEvery, put, call } from 'redux-saga/effects';
import { getProducts } from '../API/ProductApi';

function* getProductsSaga(action: PayloadAction<ListParams>) {
    try {
        const listResponse: ListReponse<Product> = yield call(() =>
            getProducts(action.payload)
        );

        yield put(getProductsSuccess(listResponse));
    } catch (error: any) {
        yield put(getProductsFailure(error.message));
    }
}

function* ProductSaga() {
    yield takeEvery(getProductsRequest.toString(), getProductsSaga);
}

export default ProductSaga;
