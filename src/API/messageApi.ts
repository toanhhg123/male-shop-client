import axios, { AxiosResponse } from 'axios';
import { Message } from 'src/Models/MessageModel';
import { configErrorRespone, sendHeaders } from './configToken';
import { BASE_URL } from './URL';

export const messageApi = axios.create({
    baseURL: BASE_URL + '/message',
    headers: {
        'Content-Type': 'application/json',
    },
});

messageApi.interceptors.request.use(sendHeaders, (error) =>
    Promise.reject(error)
);
messageApi.interceptors.response.use(
    (response) => response,
    configErrorRespone
);

export const getChat = async (chatId: string): Promise<Message[]> => {
    try {
        const res: AxiosResponse<Message[]> = await messageApi.get(
            '/get-chats/' + chatId
        );

        return res.data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};
