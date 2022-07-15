import { all } from 'redux-saga/effects';
import ProductSaga from './ProductSaga';
import ProductItemSaga from './ProductItemSaga';
import AuthSaga from './AuthSaga';
import ProductOrderSaga from './ProductOrder';
import ChatSaga from './ChatSaga';
function* mySaga() {
    yield all([
        ProductSaga(),
        ProductItemSaga(),
        AuthSaga(),
        ProductOrderSaga(),
        ChatSaga(),
    ]);
}

export default mySaga;
