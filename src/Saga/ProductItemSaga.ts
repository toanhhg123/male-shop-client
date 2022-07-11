import { getProductById } from './../API/ProductApi';
import { Product } from 'src/Models/Product';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
    getProductItemFail,
    getProductItemRequest,
    getProductItemSuccess,
} from 'src/features/ProductItemSlice';

function* HandleProductItemSaga(action: PayloadAction<string>) {
    try {
        const product: Product = yield call(() =>
            getProductById(action.payload)
        );

        if (product) yield put(getProductItemSuccess(product));
        else yield put(getProductItemFail('not found product'));
    } catch (error: any) {
        yield put(getProductItemFail(error.message));
    }
}

function* ProductItemSaga() {
    yield takeEvery(getProductItemRequest.toString(), HandleProductItemSaga);
}

export default ProductItemSaga;
