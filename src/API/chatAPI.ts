import { Chat } from './../Models/ChatModel';
import axios, { AxiosResponse } from 'axios';
import { configErrorRespone, sendHeaders } from './configToken';
import { BASE_URL } from './URL';

const chatApi = axios.create({
    baseURL: BASE_URL + '/chat',
    headers: {
        'Content-Type': 'application/json',
    },
});

chatApi.interceptors.request.use(sendHeaders, (error) => Promise.reject(error));
chatApi.interceptors.response.use((response) => response, configErrorRespone);

export const creatChat = async (
    firstId: string,
    secondId: string
): Promise<Chat> => {
    try {
        const res: AxiosResponse<Chat> = await chatApi.post('/create-chat', {
            firstId,
            secondId,
        });

        return Promise.resolve(res.data);
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};

export const findFriendsChat = async (userId: string): Promise<Chat[]> => {
    try {
        const res: AxiosResponse<Chat[]> = await chatApi.post('/find-friend', {
            userId,
        });
        return res.data;
    } catch (error: any) {
        const message = error?.response?.data?.message;
        return Promise.reject({ message: message ? message : error.message });
    }
};
