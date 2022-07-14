import { Chat } from './../Models/ChatModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
export interface ChatState {
    isRequest: boolean;
    data?: Chat;
    error: string;
}

const initState: ChatState = {
    isRequest: false,
    data: undefined,
    error: '',
};

const chatSlice = createSlice({
    name: 'chat',
    initialState: initState,
    reducers: {
        chatRequest: (state) => {
            state.isRequest = true;
        },
        chatSuccess: (state, action: PayloadAction<Chat>) => {
            state.data = action.payload;
        },
        chatFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetState: () => {
            return { ...initState };
        },
    },
});

export const chatData = (state: RootState) => state.chatReducer.data;
export const isRequest = (state: RootState) => state.chatReducer.isRequest;
export const error = (state: RootState) => state.chatReducer.error;

export const { chatRequest, chatSuccess, chatFailure, resetState } =
    chatSlice.actions;

export const chatReducer = chatSlice.reducer;
