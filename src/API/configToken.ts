import { AxiosRequestConfig } from 'axios';
import { AuthState } from 'src/features/AuthFile/Auth';
import { axiosAuth } from './AuthAPI';

export const sendHeaders = async (config: AxiosRequestConfig<any>) => {
    const auth: AuthState = JSON.parse(localStorage.getItem('auth') || '{}');

    if (auth.token?.accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${auth.token.accessToken}`,
        };
    }
    return config;
};

export const configErrorRespone = async (error: any) => {
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
                console.log('refresh toke success');

                return axiosAuth(error.config);
            }
        }
        return Promise.reject(error);
    }

    return Promise.reject(error);
};
