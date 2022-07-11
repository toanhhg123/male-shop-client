import { OrderItem } from './../features/ProductOrderSlice';
import { ProductOrder } from './../Models/ProductOrder';
import { axiosAuth } from './AuthAPI';
import { AuthState } from 'src/features/AuthFile/Auth';
import axios, { AxiosError } from 'axios';

export const orderApi = axios.create({
    baseURL: 'https://rolle-maleshop.herokuapp.com/order',
    headers: {
        'Content-Type': 'application/json',
    },
});

orderApi.interceptors.request.use(
    (config) => {
        const authState: AuthState = JSON.parse(
            localStorage.getItem('auth') || '{}'
        );
        console.log('send token');

        if (authState.token?.accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${authState.token.accessToken}`,
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

orderApi.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError | any) => {
        try {
            if (
                error.response?.status === 403 &&
                error.response.data?.message === 'jwt expired'
            ) {
                const auth: AuthState = JSON.parse(
                    localStorage.getItem('auth') || '{}'
                );
                if (auth.token?.refreshToken && auth.userInfo?.userName) {
                    const refreshToken = auth.token?.refreshToken;
                    const userName = auth.userInfo?.userName;
                    const response = await axiosAuth.post('/refreshtoken', {
                        refreshToken,
                        userName,
                    });
                    auth.token.accessToken = response.data.accessToken;
                    localStorage.setItem('auth', JSON.stringify(auth));
                    console.log('send refresh token success');
                    return orderApi(error.config);
                }
            }
            return Promise.reject(error);
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

export const getProductCart = async (): Promise<ProductOrder[]> => {
    try {
        const res = await orderApi.get('/get-products-order');

        return res.data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};

export const orderProduct = async (
    orderTiem: OrderItem
): Promise<ProductOrder[]> => {
    try {
        const { data } = await orderApi.post('/', orderTiem);
        return data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};

export const deleteProductOrder = async (
    productId: string
): Promise<ProductOrder[]> => {
    try {
        const { data } = await orderApi.delete(`/order-delete/${productId}`);
        return data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};
