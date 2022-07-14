import { productOrderReducer } from './../features/ProductOrderSlice';
import { ProductItemReducer } from './../features/ProductItemSlice';
import { ProductReducer } from './../features/ProductSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AuthReducer } from '../features/AuthFile/Auth';
import createSagaMiddleware from 'redux-saga';
import mySaga from 'src/Saga/saga';
import { chatReducer } from 'src/features/chatSlice';
import { messageReducer } from 'src/features/MessageSlice';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        ProductReducer,
        ProductItemReducer,
        productOrderReducer,
        chatReducer,
        messageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            thunk: false,
        }).concat(sagaMiddleware),
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
