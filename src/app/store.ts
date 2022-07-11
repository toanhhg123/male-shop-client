import { productOrderReducer } from './../features/ProductOrderSlice';
import { ProductItemReducer } from './../features/ProductItemSlice';
import { ProductReducer } from './../features/ProductSlice';
import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { AuthReducer } from '../features/AuthFile/Auth';
import createSagaMiddleware from 'redux-saga';
import mySaga from 'src/Saga/saga';
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        ProductReducer,
        ProductItemReducer,
        productOrderReducer,
    },
    middleware,
});

sagaMiddleware.run(mySaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
