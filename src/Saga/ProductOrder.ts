import { OrderItem } from './../features/ProductOrderSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductOrder } from './../Models/ProductOrder';
import {
    deleteProductOrder,
    getProductCart,
    orderProduct,
} from 'src/API/orderAPI';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
    productOrderRequest,
    resetState,
    productOrderFail,
    productsOrderSuccess,
    orderProductRequest,
    productOrderDelete,
} from 'src/features/ProductOrderSlice';
import { authLogout } from 'src/features/AuthFile/Auth';
function* handleProductOrderRequest() {
    try {
        const productOrders: ProductOrder[] = yield call(getProductCart);

        yield put(resetState());
        yield put(productsOrderSuccess(productOrders));
    } catch (error: any) {
        yield put(productOrderFail(error.message));
        yield put(authLogout());
    }
}
function* handleOrderProduct(action: PayloadAction<OrderItem>) {
    try {
        const productsOrder: ProductOrder[] = yield call(() =>
            orderProduct(action.payload)
        );
        yield put(productsOrderSuccess(productsOrder));
    } catch (error: any) {
        yield put(productOrderFail(error.message));
    }
}

function* handleOrderProductDelete(action: PayloadAction<string>) {
    try {
        const data: ProductOrder[] = yield call(() =>
            deleteProductOrder(action.payload)
        );

        yield put(resetState());
        yield put(productsOrderSuccess(data));
    } catch (error: any) {
        yield put(productOrderFail(error.message));
    }
}

export default function* ProductOrderSaga() {
    yield takeEvery(productOrderRequest.toString(), handleProductOrderRequest);
    yield takeEvery(orderProductRequest.toString(), handleOrderProduct);
    yield takeEvery(productOrderDelete.toString(), handleOrderProductDelete);
}
