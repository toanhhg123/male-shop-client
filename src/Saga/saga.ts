import { all } from 'redux-saga/effects';
import ProductSaga from './ProductSaga';
import ProductItemSaga from './ProductItemSaga';
import AuthSaga from './AuthSaga';
import ProductOrderSaga from './ProductOrder';
function* mySaga() {
    yield all([
        ProductSaga(),
        ProductItemSaga(),
        AuthSaga(),
        ProductOrderSaga(),
    ]);
}

export default mySaga;
