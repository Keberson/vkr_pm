import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import activityEditorSlice from "./slices/ActivityEditorSlice"
import wbsEditorSlice from "./slices/WBSEditorSlice"
import treeSlice from "./slices/TreeSlice"
import modalProjectSlice from "./slices/ModalProjectSlice";
import loaderSlice from "./slices/LoaderSlice";

import {activityApi} from "../services/ActivityService";
import toastSlice from "./slices/ToastSlice";
import {wbsApi} from "../services/WBSService";

export const store = configureStore({
    reducer: {
        activityEditor: activityEditorSlice,
        wbsEditor: wbsEditorSlice,
        tree: treeSlice,
        modalProject: modalProjectSlice,
        loader: loaderSlice,
        toast: toastSlice,
        [activityApi.reducerPath]: activityApi.reducer,
        [wbsApi.reducerPath]: wbsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(activityApi.middleware)
            .concat(wbsApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
