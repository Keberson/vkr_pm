import { createSlice } from '@reduxjs/toolkit'

import {loginApi} from "../../services/LoginService";

interface AuthState {
    isAuth: boolean,
    name: string | null,
    role: string | null,
    jwt: string | null
}

const initialState: AuthState = {
    isAuth: localStorage.getItem("jwt") !== null,
    name: localStorage.getItem("username"),
    role: localStorage.getItem("role"),
    jwt: localStorage.getItem("jwt")
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            state.name = null;
            state.role = null;
            state.jwt = null;

            localStorage.removeItem("jwt");
            localStorage.removeItem("name");
            localStorage.removeItem("role");
        }
    },
    extraReducers: builder => {
        builder
            .addMatcher(loginApi.endpoints.login.matchFulfilled, (state, action) => {
                localStorage.setItem("jwt", action.payload.jwt);
                localStorage.setItem("name", action.payload.name);
                localStorage.setItem("role", action.payload.role);

                state.isAuth = true;
                state.name = action.payload.name;
                state.role = action.payload.role;
                state.jwt = action.payload.jwt;
            })
            .addMatcher(loginApi.endpoints.login.matchRejected, (state) => {
                state.isAuth = localStorage.getItem("jwt") !== null;
            })
    }
})

export const {
    logout
} = AuthSlice.actions
export default AuthSlice.reducer
