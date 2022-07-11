import {
    UserLogin,
    UserRegister,
    UserUpdate,
} from './../features/AuthFile/Auth';
import axios from 'axios';
import { AuthState } from 'src/features/AuthFile/Auth';

export const axiosAuth = axios.create({
    baseURL: 'https://rolle-maleshop.herokuapp.com/user',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosAuth.interceptors.request.use(
    async (config) => {
        const auth: AuthState = JSON.parse(
            localStorage.getItem('auth') || '{}'
        );

        if (auth.token?.accessToken) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${auth.token.accessToken}`,
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosAuth.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (
            error?.response?.status === 403 &&
            error?.response?.data?.message === 'jwt expired'
        ) {
            const auth: AuthState = JSON.parse(
                localStorage.getItem('auth') || '{}'
            );
            const userName = auth.userInfo?.userName;
            if (auth.token?.refreshToken && userName) {
                const response = await axiosAuth.post('/refreshtoken', {
                    refreshToken: auth.token.refreshToken,
                    userName,
                });
                if (response.status === 200) {
                    auth.token.accessToken = response.data.accessToken;
                    localStorage.setItem('auth', JSON.stringify(auth));
                    return axiosAuth(error.config);
                }
            }
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export const login = async (userLogin: UserLogin): Promise<AuthState> => {
    try {
        const { data } = await axiosAuth.post('/login', { ...userLogin });
        return Promise.resolve(data);
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};

export const register = async (
    userRegister: UserRegister
): Promise<UserRegister> => {
    try {
        const { data } = await axiosAuth.post('/register', userRegister);

        return Promise.resolve(data);
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};

export const updateAuth = async (dataUpdate: UserUpdate): Promise<string> => {
    try {
        const { data } = await axiosAuth.post('/update', dataUpdate);
        return data.message;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};
