import { RootState } from './../app/store';
import { ProductOrder } from './../Models/ProductOrder';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductOrderState {
    productOrders: ProductOrder[];
    isLoading: boolean;
    error: string;
}
export interface OrderItem {
    productId: string;
    qty: number;
    totailPrice: number;
}

export interface ProductUpdate {
    productId: string;
    qty: number;
    price: number;
}

const initState: ProductOrderState = {
    productOrders: [],
    isLoading: false,
    error: '',
};

const productOrderSlice = createSlice({
    name: 'productOrder',
    initialState: initState,
    reducers: {
        productOrderRequest: (state) => {
            state.isLoading = true;
        },
        orderProductRequest: (state, action: PayloadAction<OrderItem>) => {
            state.isLoading = true;
        },
        productsOrderSuccess: (
            state,
            action: PayloadAction<ProductOrder[]>
        ) => {
            state.productOrders = action.payload;
        },

        productOrderDelete: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },

        productOrderFail: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        updateProductOrder: (state, action: PayloadAction<ProductUpdate>) => {
            console.log(action.payload);

            const index = state.productOrders.findIndex(
                (product) => product.productId === action.payload.productId
            );
            if (index > -1) {
                const { productOrders } = state;
                const { qty, price } = action.payload;

                productOrders[index].qty = qty;
                productOrders[index].totailPrice = qty * price;
            }
        },
        resetState: (state) => {
            state.isLoading = false;
            state.productOrders = [];
            state.error = '';
        },
    },
});

export const {
    productOrderRequest,
    productsOrderSuccess,
    productOrderFail,
    resetState,
    orderProductRequest,
    productOrderDelete,
    updateProductOrder,
} = productOrderSlice.actions;

export const productOrderState = (state: RootState) =>
    state.productOrderReducer.productOrders;

export const productOrderReducer = productOrderSlice.reducer;
