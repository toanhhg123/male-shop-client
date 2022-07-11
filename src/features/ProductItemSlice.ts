import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { Product } from 'src/Models/Product';

export interface ProductItemSliceState {
    product?: Product;
    isLoading: boolean;
    error: string;
}

const initState: ProductItemSliceState = {
    product: undefined,
    isLoading: false,
    error: '',
};

const productItemSlice = createSlice({
    name: 'productItem',
    initialState: initState,
    reducers: {
        getProductItemRequest: (
            state,
            action: PayloadAction<string | undefined>
        ) => {
            state.isLoading = true;
            state.error = '';
        },
        getProductItemSuccess: (state, action: PayloadAction<Product>) => {
            state.isLoading = false;
            state.error = '';
            state.product = action.payload;
        },
        getProductItemFail: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const productItem = (state: RootState) =>
    state.ProductItemReducer.product;

export const {
    getProductItemRequest,
    getProductItemSuccess,
    getProductItemFail,
} = productItemSlice.actions;

export const isLoading = (state: RootState) =>
    state.ProductItemReducer.isLoading;
export const error = (state: RootState) => state.ProductItemReducer.error;

export const ProductItemReducer = productItemSlice.reducer;
