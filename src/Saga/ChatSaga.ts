import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { findFriendsChat } from 'src/API/chatAPI';
import { chatFailure, chatRequest, chatSuccess } from 'src/features/chatSlice';
import { Chat } from 'src/Models/ChatModel';
function* HandleGetChats(action: PayloadAction<string>) {
    try {
        const friends: Chat[] = yield call(() =>
            findFriendsChat(action.payload)
        );
        yield put(chatSuccess(friends));
    } catch (error: any) {
        yield put(chatFailure(error.message));
    }
}

export default function* ChatSaga() {
    yield takeEvery(chatRequest.toString(), HandleGetChats);
}
