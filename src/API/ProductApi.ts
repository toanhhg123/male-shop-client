import { BASE_URL } from './URL';
import { Product } from 'src/Models/Product';
import { ListReponse, ListParams } from './../Models/Commom';

import axios from 'axios';

const productApi = axios.create({
    baseURL: BASE_URL + '/products',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = async (
    lisparam?: ListParams
): Promise<ListReponse<Product>> => {
    try {
        const response = await productApi.get(
            `/?keyword=${lisparam?.keyword || ''}&p=${
                lisparam?.page || 1
            }&limit=${lisparam?.limit || ''}`
        );
        const { products, page, pages } = response.data;

        return Promise.resolve({
            data: products,
            pagination: {
                Page: page,
                Pages: pages,
            },
        });
    } catch (error: any) {
        return Promise.reject(error.message);
    }
};

export const getProductById = async (
    id: string | undefined
): Promise<Product> => {
    try {
        const res = await productApi.get(`/product/${id}`);
        return res.data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};
