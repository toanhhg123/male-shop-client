import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import { Message } from 'src/Models/MessageModel';

export interface MessageState {
    isRequest: boolean;
    data: Message[];
    error: string;
}
const initialState: MessageState = {
    isRequest: false,
    data: [],
    error: '',
};

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        messageRequest: (state) => {
            state.isRequest = true;
        },
        messageSuccess: (state, action: PayloadAction<Message[]>) => {
            state.data = action.payload;
        },
        messageFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetState: () => {
            return { ...initialState };
        },
    },
});

export const listMessage = (state: RootState) => state.messageReducer.data;
export const isRequest = (state: RootState) => state.messageReducer.isRequest;
export const error = (state: RootState) => state.messageReducer.error;

export const messageReducer = messageSlice.reducer;
