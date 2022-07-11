import { ListReponse, ListParams } from './../Models/Commom';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { Product } from 'src/Models/Product';

export interface ProductSliceState {
    products: Product[];
    isLoading: boolean;
    error: string;
    page?: number;
    pages?: number;
}

const initState: ProductSliceState = {
    products: [],
    isLoading: false,
    error: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState: initState,
    reducers: {
        getProductsRequest: (state, action: PayloadAction<ListParams>) => {
            state.isLoading = true;
        },
        getProductsSuccess: (
            state,
            action: PayloadAction<ListReponse<Product>>
        ) => {
            state.isLoading = false;
            state.products = action.payload.data;
            state.page = Number(action.payload.pagination.Page);
            state.pages = Number(action.payload.pagination.Pages);
        },
        getProductsFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const products = (state: RootState) => state.ProductReducer.products;
export const page = (state: RootState) => state.ProductReducer.page;
export const pages = (state: RootState): number =>
    state.ProductReducer.pages || 0;

export const { getProductsRequest, getProductsSuccess, getProductsFailure } =
    productSlice.actions;

export const ProductReducer = productSlice.reducer;
