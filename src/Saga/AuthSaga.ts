import { updateAuth } from './../API/AuthAPI';
import {
    authLogout,
    resetState,
    updateProfile,
    UserLogin,
    UserRegister,
    UserUpdate,
} from './../features/AuthFile/Auth';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
    authRequest,
    authFailure,
    AuthState,
    authSuccess,
    registerRequest,
} from 'src/features/AuthFile/Auth';

import { login, register } from 'src/API/AuthAPI';

function* HandleLoginSaga(action: PayloadAction<UserLogin>) {
    try {
        const data: AuthState = yield call(() => login(action.payload));
        localStorage.setItem('auth', JSON.stringify(data));
        yield put(authSuccess(data));
    } catch (error: any) {
        yield put(authFailure(error.message));
    }
}

function* HandleRegister(action: PayloadAction<UserRegister>) {
    try {
        yield call(() => register(action.payload));
        yield put(resetState());
        yield put(
            authRequest({
                userName: action.payload.userName,
                password: action.payload.password,
            })
        );
    } catch (error: any) {
        yield put(authFailure(error.message));
    }
}

function* handleUpdateProfile(action: PayloadAction<UserUpdate>) {
    try {
        const success: string = yield call(() => updateAuth(action.payload));
        console.log({ success });
        if (success === 'success') {
            yield put(
                authRequest({
                    userName: action.payload.userName,
                    password: action.payload.newPassword,
                })
            );
        }
        throw new Error('saga fail');
    } catch (error: any) {
        yield put(authFailure(error.message));
    }
}

function* handleLogout() {
    localStorage.removeItem('auth');
    yield put(resetState());
}

export default function* AuthSaga() {
    yield takeEvery(authRequest.toString(), HandleLoginSaga);
    yield takeEvery(registerRequest.toString(), HandleRegister);
    yield takeEvery(authLogout.toString(), handleLogout);
    yield takeEvery(updateProfile.toString(), handleUpdateProfile);
}
