import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/Models/User';
import { RootState } from 'src/app/store';

export interface AuthState {
    authReqeuest?: boolean | false;
    isAuthenticated?: boolean | false;
    token?: {
        accessToken: string;
        refreshToken: string;
    };
    userInfo?: User;
    error?: string;
    isRegister?: boolean;
}

const auth: AuthState = JSON.parse(localStorage.getItem('auth') || '{}') || {};

const initialState: AuthState = {
    ...auth,
    authReqeuest: false,
    isAuthenticated: Object.keys(auth).length ? true : false,
    isRegister: false,
};

export interface UserLogin {
    userName: string;
    password: string;
}
export interface UserRegister {
    userName: string;
    password: string;
    confirmPassword?: string;
    email: string;
    imgBase64: string;
}

export interface UserUpdate {
    userName: string;
    email: string;
    password: string;
    newPassword: string;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authRequest: (state, action: PayloadAction<UserLogin>) => {
            state.authReqeuest = true;
        },
        authSuccess: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.authReqeuest = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        },
        authLogout: (state) => {
            state.authReqeuest = false;
            state.isAuthenticated = false;
            state.userInfo = undefined;
            state.error = '';
            state.token = undefined;
        },
        authFailure: (state, action: PayloadAction<string>) => {
            state.authReqeuest = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        registerRequest: (state, action: PayloadAction<UserRegister>) => {
            state.authReqeuest = true;
        },
        registerSuccess: (state) => {
            state.isRegister = true;
            state.authReqeuest = false;
        },
        updateProfile: (state, action: PayloadAction<UserUpdate>) => {
            state.authReqeuest = true;
        },
        resetState: (state) => {
            state.isRegister = false;
        },
    },
});

export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const token = (state: RootState) => state.auth.token;
export const userInfo = (state: RootState) => state.auth.userInfo;
export const isLoading = (state: RootState) => state.auth.authReqeuest;
export const error = (state: RootState) => state.auth.error;
export const isRegister = (state: RootState) => state.auth.isRegister;
export const {
    authRequest,
    authSuccess,
    authFailure,
    authLogout,
    registerRequest,
    registerSuccess,
    resetState,
    updateProfile,
} = authSlice.actions;
export const AuthReducer = authSlice.reducer;
