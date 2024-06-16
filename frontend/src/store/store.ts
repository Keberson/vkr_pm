import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import treeSlice from "./slices/TreeSlice"
import modalProjectSlice from "./slices/ModalProjectSlice";
import loaderSlice from "./slices/LoaderSlice";
import toastSlice from "./slices/ToastSlice";
import viewSlice from "./slices/ViewSlice";
import createSlice from "./slices/CreateSlice";
import groupSlice from "./slices/GroupSlice";

import {api} from "../services/APIService";
import {loginApi} from "../services/LoginService";
import authSlice from "./slices/AuthSlice";
import projectSlice from "./slices/ProjectSlice";
import editorSlice from "./slices/EditorSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        editor: editorSlice,
        tree: treeSlice,
        modalProject: modalProjectSlice,
        loader: loaderSlice,
        toast: toastSlice,
        view: viewSlice,
        create: createSlice,
        group: groupSlice,
        project: projectSlice,
        [api.reducerPath]: api.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(loginApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
