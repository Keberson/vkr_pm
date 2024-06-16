import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import activityEditorSlice from "./slices/ActivityEditorSlice"
import wbsEditorSlice from "./slices/WBSEditorSlice"
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

export const store = configureStore({
    reducer: {
        auth: authSlice,
        activityEditor: activityEditorSlice,
        wbsEditor: wbsEditorSlice,
        tree: treeSlice,
        modalProject: modalProjectSlice,
        loader: loaderSlice,
        toast: toastSlice,
        view: viewSlice,
        create: createSlice,
        group: groupSlice,
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
